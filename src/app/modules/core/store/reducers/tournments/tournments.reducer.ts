import { AppState } from "../../app-state";
import { Store, select } from "@ngrx/store";
import { ActionModel } from "../../action.model";
import { TournmentsState } from "../../../state/tournments/tournments.state";
import {
  ClearTournmentsState,
  TournmentsActionTypes,
} from "../../../actions/tournments/tournments.action";

export const initialState = new TournmentsState([]);

export function tournmentsReducer(state = initialState, action: ActionModel) {
  switch (action.type) {
    case TournmentsActionTypes.UpdateTournments: {
      if (!action.payload || !action.payload.length) {
        return state;
      }

      const newState = new TournmentsState(action.payload);

      return Object.assign({}, state, newState);
    }

    case TournmentsActionTypes.ClearTournmentsState: {
      return Object.assign({}, state, initialState);
    }

    default:
      return state;
  }
}

export const selectTournments = (store: Store<AppState>) => {
  let TournmentsState: TournmentsState;

  store
    .pipe(select("tournments"))
    .subscribe((x) => {
      TournmentsState = x;
    })
    .unsubscribe();
  // @ts-ignore
  return TournmentsState;
};

export const clearTournments = (store: Store<AppState>) => {
  store.dispatch(ClearTournmentsState(undefined));
};
