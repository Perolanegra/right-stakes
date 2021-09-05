import { ActionReducerMap } from '@ngrx/store';
import { accountReducer } from './reducers/account/account.reducer';
import { countriesReducer } from './reducers/countries/countries.reducer';
import { customerReducer } from './reducers/cutomer/customer.reducer';
import { teamsReducer } from './reducers/teams/teams.reducer';
import { tournmentsReducer } from './reducers/tournments/tournments.reducer';

export const reducerKeys = ['tournments', 'account', 'customer', 'countries', 'teams'];

export interface AppState {
  tournments: any;
  account: any;
  customer: any,
  countries: any,
  teams: any
}

export const reducers: ActionReducerMap<AppState> = {
  account: accountReducer,
  tournments: tournmentsReducer,
  customer: customerReducer,
  countries: countriesReducer,
  teams: teamsReducer
};