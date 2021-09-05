import { ActionModel } from "../../store/action.model";

export enum CustomerActionTypes {
  UpdateCustomer = 'UPDATE_CUSTOMER',
  ClearCustomerState = 'CLEAR_CUSTOMER_STATE',
}

export const UpdateCustomer = (data: any) => {
  return { type: CustomerActionTypes.UpdateCustomer, payload: data } as ActionModel;
};

export const ClearCustomerState = (data: any) => {
  return { type: CustomerActionTypes.ClearCustomerState, payload: data } as ActionModel;
};
