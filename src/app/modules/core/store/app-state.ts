import { ActionReducerMap } from '@ngrx/store';
import { accountReducer } from './reducers/account/account.reducer';
import { tournmentsReducer } from './reducers/tournments/tournments.reducer';

export const reducerKeys = ['tournments', 'account'];

export interface AppState {
  tournments: any;
  account: any;
  // user: any;
  // token: any;
  // product: any;
  // multijunction: any;
  // term: any;
}

export const reducers: ActionReducerMap<AppState> = {
  account: accountReducer,
  tournments: tournmentsReducer
};