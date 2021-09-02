import { ActionReducerMap } from '@ngrx/store';
import { accountReducer } from './reducers/account/account.reducer';

export const reducerKeys = ['customer'];

export interface AppState {
  // account: any;
  account: any;
  // user: any;
  // token: any;
  // product: any;
  // multijunction: any;
  // term: any;
}

export const reducers: ActionReducerMap<AppState> = {
  account: accountReducer,
};