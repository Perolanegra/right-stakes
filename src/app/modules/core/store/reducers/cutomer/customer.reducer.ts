import { AppState } from "../../app-state";
import { Store, select } from "@ngrx/store";
import { CustomerState } from "../../../state/customer/customer.state";
import { ActionModel } from "../../action.model";
import {
  CustomerActionTypes,
  ClearCustomerState,
} from "../../../actions/customer/customer.action";

export const initialState = new CustomerState(false);

export function customerReducer(state = initialState, action: ActionModel) {
  switch (action.type) {
    case CustomerActionTypes.UpdateCustomer: {
      if (!action.payload) {
        return state;
      }

      const newState = new CustomerState(action.payload.isLogged);

      return Object.assign({}, state, newState);
    }

    case CustomerActionTypes.ClearCustomerState: {
      return Object.assign({}, state, initialState);
    }

    default:
      return state;
  }
}

export const selectCustomer = (store: Store<AppState>) => {
  let CustomerState: CustomerState;

  store
    .pipe(select("customer"))
    .subscribe((x) => {
      CustomerState = x;
    })
    .unsubscribe();
  // @ts-ignore
  return CustomerState;
};

export const clearCustomer = (store: Store<AppState>) => {
  store.dispatch(ClearCustomerState(undefined));
};
