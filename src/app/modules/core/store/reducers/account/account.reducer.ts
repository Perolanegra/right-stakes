import { AppState } from "../../app-state";
import { Store, select } from "@ngrx/store";
import { AccountState } from "../../../state/account/account.state";
import { ActionModel } from "../../action.model";
import {
  AccountActionTypes,
  ClearAccountState,
} from "../../../actions/account/account.action";

export const initialState = new AccountState("", "", "", '');

export function accountReducer(state = initialState, action: ActionModel) {
  switch (action.type) {
    case AccountActionTypes.UpdateAccount: {
      if (!action.payload) {
        return state;
      }

      const newState = new AccountState(
        action.payload.username,
        action.payload.password,
        action.payload.balance,
        action.payload.id
      );

      return Object.assign({}, state, newState);
    }

    case AccountActionTypes.ClearAccountState: {
      return Object.assign({}, state, initialState);
    }

    default:
      return state;
  }
}

export const selectAccount = (store: Store<AppState>) => {
  let accountState: AccountState;

  store
    .pipe(select("account"))
    .subscribe((x) => {
      accountState = x;
    })
    .unsubscribe();
  // @ts-ignore
  return accountState;
};

export const clearAccount = (store: Store<AppState>) => {
  store.dispatch(ClearAccountState(undefined));
};
