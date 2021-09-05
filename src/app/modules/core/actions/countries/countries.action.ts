import { ActionModel } from "../../store/action.model";

export enum CountriesActionTypes {
  UpdateCountries = 'UPDATE_COUNTRIES',
  ClearCountriesState = 'CLEAR_COUNTRIES_STATE',
}

export const UpdateCountries = (data: any) => {
  return { type: CountriesActionTypes.UpdateCountries, payload: data } as ActionModel;
};

export const ClearCountriesState = (data: any) => {
  return { type: CountriesActionTypes.ClearCountriesState, payload: data } as ActionModel;
};
