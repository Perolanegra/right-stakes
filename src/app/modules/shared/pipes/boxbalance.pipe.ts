import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "boxbalance",
})
export class BoxbalancePipe implements PipeTransform {
  transform(strCheck: string | null): unknown {
    const index = strCheck?.indexOf("$");
    return strCheck?.substring((index as any) + 1);
  }
}
