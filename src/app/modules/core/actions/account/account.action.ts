import { ActionModel } from "../../store/action.model";

export enum AccountActionTypes {
  UpdateAccount = 'UPDATE_ACCOUNT',
  ClearAccountState = 'CLEAR_ACCOUNT_STATE',
}

export const UpdateAccount = (data: any) => {
  return { type: AccountActionTypes.UpdateAccount, payload: data } as ActionModel;
};

export const ClearAccountState = (data: any) => {
  return { type: AccountActionTypes.ClearAccountState, payload: data } as ActionModel;
};
