import { ActionReducerMap } from '@ngrx/store';
import { accountReducer } from './reducers/account/account.reducer';
import { countriesReducer } from './reducers/countries/countries.reducer';
import { customerReducer } from './reducers/cutomer/customer.reducer';
import { tournmentsReducer } from './reducers/tournments/tournments.reducer';

export const reducerKeys = ['tournments', 'account', 'customer', 'countries'];

export interface AppState {
  tournments: any;
  account: any;
  customer: any,
  countries: any
}

export const reducers: ActionReducerMap<AppState> = {
  account: accountReducer,
  tournments: tournmentsReducer,
  customer: customerReducer,
  countries: countriesReducer
};