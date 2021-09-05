import { ActionReducerMap } from '@ngrx/store';
import { accountReducer } from './reducers/account/account.reducer';
import { customerReducer } from './reducers/cutomer/customer.reducer';
import { tournmentsReducer } from './reducers/tournments/tournments.reducer';

export const reducerKeys = ['tournments', 'account', 'customer'];

export interface AppState {
  tournments: any;
  account: any;
  customer: any
}

export const reducers: ActionReducerMap<AppState> = {
  account: accountReducer,
  tournments: tournmentsReducer,
  customer: customerReducer
};