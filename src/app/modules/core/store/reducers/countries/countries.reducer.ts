import { AppState } from "../../app-state";
import { Store, select } from "@ngrx/store";
import { CountriesState } from "../../../state/countries/countries.state";
import { ActionModel } from "../../action.model";
import {
  CountriesActionTypes,
  ClearCountriesState,
} from "../../../actions/countries/countries.action";

export const initialState = new CountriesState([]);

export function countriesReducer(state = initialState, action: ActionModel) {
  switch (action.type) {
    case CountriesActionTypes.UpdateCountries: {
      if (!action.payload) {
        return state;
      }

      const newState = new CountriesState(action.payload.countries);

      return Object.assign({}, state, newState);
    }

    case CountriesActionTypes.ClearCountriesState: {
      return Object.assign({}, state, initialState);
    }

    default:
      return state;
  }
}

export const selectCountries = (store: Store<AppState>) => {
  let CountriesState: CountriesState;

  store
    .pipe(select("countries"))
    .subscribe((x) => {
      CountriesState = x;
    })
    .unsubscribe();
  // @ts-ignore
  return CountriesState;
};

export const clearCountries = (store: Store<AppState>) => {
  store.dispatch(ClearCountriesState(undefined));
};
