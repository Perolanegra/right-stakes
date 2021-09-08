import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { localStorageSync } from 'ngrx-store-localstorage';
import { reducerKeys, reducers } from './modules/core/store/app-state';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppController } from './modules/core/default/appController';
import { SharedModule } from './modules/shared/shared.module';
import { AppMenuComponent } from './components/app-menu/app-menu.component';
import { HttpClientModule } from '@angular/common/http';

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({ keys: reducerKeys, rehydrate: true })(reducer);
}

const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

@NgModule({
  declarations: [
    AppComponent,
    AppMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [AppController],
  bootstrap: [AppComponent]
})
export class AppModule { }
