import {
  Injectable,
  Renderer2,
  ElementRef,
  RendererFactory2,
} from "@angular/core";
import { AbstractControl } from "@angular/forms";
import { Router } from "@angular/router";
import { debounceTime, tap } from "rxjs/operators";

@Injectable()
export class AppController {
  private renderer: Renderer2;

  constructor(
    private rendererFactory: RendererFactory2,
    private router: Router
  ) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  /**
   * Trata o autocomplete para campos de objetos que repesentam entidades com ID
   * @pFormControlEntidade Campo que contem a instancia do ojeto selecionado
   * @pFormControlIdEntidade Campo que contem o ID da instancia do objeto selecionado
   * @pFuncaoTratamento Função responsável por obter os registros de um `Autocomplete`
   * @pTamanhoMinimo Quantidade mínima de caractere digitado para efetuar a requisição
   */
  public tratarAutoCompleteEntidade(
    pFormControlEntidade: AbstractControl,
    pFormControlIdEntidade: AbstractControl,
    pFuncaoTratamento: any,
    pTamanhoMinimo: number = 4
  ) {
    //Inicia o id com o id da entidade recebida.
    if (pFormControlEntidade.value) {
      pFormControlIdEntidade.setValue(pFormControlEntidade.value.id);
    } else {
      pFormControlIdEntidade.reset();
    }
    pFormControlEntidade.valueChanges
      .pipe(
        debounceTime(500),
        tap(async (pValue) => {
          if (
            pValue &&
            pValue.length >= pTamanhoMinimo &&
            pValue != null &&
            pValue.toString() != ""
          ) {
            try {
              pFuncaoTratamento(pValue);
            } catch (err) {
              //   this.handleError(err);
            }
          }
        })
      )
      .subscribe((entidade) => {
        //Na mudança do autocomplete, atualiza o id associado
        if (entidade != null && entidade.id) {
          pFormControlIdEntidade.setValue(entidade.id);
        } else {
          pFormControlIdEntidade.reset();
        }
      });
  }

  /**
   * @author igor.alves
   * @param path Recebe uma string como parâmetro que faz referência a rota a ser navegada.
   * @description Retorna para uma nova rota de navegação.
   */
  public navigate(path: string): void {
    this.router
      .navigate(["/" + path])
      .catch((error) => console.log("error: ", error));
    //   .finally(() => this.spinner.hide());
  }

  public navigateUrl(path: string) {
    this.router
      .navigateByUrl("/", { skipLocationChange: true })
      .then(() => this.router.navigate([path]));
  }

  /**
   * @author igor.alves
   * @param path Recebe uma string como parâmetro que faz referência a rota a ser navegada.
   * @param params Array de parametros a serem expostos na URL que são obtidos nos resolvers se implementado.
   * @description Retorna para uma nova rota de navegação.
   */
  public navigateWithParams(path: string, params: any[]): void {
    this.router
      .navigate(["/" + path, ...params])
      .catch((error) => console.log("error: ", error));
    //   .finally(() => this.spinner.hide());
  }

  // public hideSpinner(): void {
  //   this.spinner.hide();
  // }

  // public showSpinner(): void {
  //   this.spinner.show();
  // }

  /**
   * Retorna a nova String sem os parâmetros de caracteres passados.
   * @param pStr String que deseja ser alterada.
   * @param pArray Array de caracteres que deseja retirar da String passada.
   * @author igor.silva
   */
  public removeCpfFormat(pStr: string, pArray: Array<any>) {
    let lStr = pStr;
    let lReplace;
    let lReg;

    pArray.forEach((item) => {
      if (pStr != undefined && pStr != null) {
        lReplace = item;
        if (item == ".") {
          lReplace = /\./;
        }

        lReg = new RegExp(lReplace, "g");
        lStr = lStr.replace(lReg, "");
      }
    });

    return lStr;
  }

  /**
   * Retorna um objeto com as propriedades de ano, mês e dia da Data passada.
   * @param pDataBr String da data em formato br. Exemplo: 07/08/2019 ou 07-08-2019.
   * @author igor.silva
   */
  obterAnoMesDia(pDataBr: string): Object {
    let lObjRetorno: any = {
      dia: new String(),
      mes: new String(),
      ano: new String(),
    };

    for (let i = 0; i < pDataBr.length; i++) {
      if (i < 2) {
        lObjRetorno.dia += pDataBr.charAt(i);
      } else if (i > 2 && i < 5) {
        lObjRetorno.mes += pDataBr.charAt(i);
      } else if (i > 5 && i < 10) {
        lObjRetorno.ano += pDataBr.charAt(i);
      }
    }

    return lObjRetorno;
  }

  /**
   * Método que adiciona classe passada como parâmetro em determinado elemento.
   * @param nativeElement Elemento a ser estilizado, nativeElement.
   * @param classOn Classe css a ser aplicada.
   * @returns void
   * @author igor.alves
   */
  setElementClass(nativeElement: ElementRef, classOn: string) {
    this.renderer.addClass(nativeElement, classOn);
  }

  /**
   * Método que remove a classe passada como parâmetro em determinado elemento.
   * @param nativeElement Elemento o qual a classe será removida.
   * @param classOff Classe que será removida.
   * @author igor.alves
   */
  removeElementClass(nativeElement: ElementRef, classOff: string): void {
    this.renderer.removeClass(nativeElement, classOff);
  }

  /**
   * Método que estiliza o elemento de acordo com a propriedade passada.
   * @param elementRef Elemento a ser estilizado, nativeElement.
   * @param key Propriedade css a ser aplicada.
   * @param value Valor css a ser aplicado.
   * @returns void
   * @author igor.alves
   */
  setElementStyle(element: Element, key: string, value: string): void {
    this.renderer.setStyle(element, key, value);
  }

  triggerCustomEvent(eventName: string, params: any = {}) {
    let event;
    if (typeof Event === "function") {
      event = new CustomEvent(eventName, { detail: params });
    } else {
      event = document.createEvent("Event");
      event.initEvent(eventName, true, true);
    }
    window.dispatchEvent(event);
  }
}
