import { AppState } from "../../app-state";
import { Store, select } from "@ngrx/store";
import { TeamsState } from "../../../state/teams/teams.state";
import { ActionModel } from "../../action.model";
import {
  TeamsActionTypes,
  ClearTeamsState,
} from "../../../actions/teams/teams.action";

export const initialState = new TeamsState([]);

export function teamsReducer(state = initialState, action: ActionModel) {
  switch (action.type) {
    case TeamsActionTypes.UpdateTeams: {
      if (!action.payload) {
        return state;
      }

      const newState = new TeamsState(action.payload.teams);

      return Object.assign({}, state, newState);
    }

    case TeamsActionTypes.ClearTeamsState: {
      return Object.assign({}, state, initialState);
    }

    default:
      return state;
  }
}

export const selectTeams = (store: Store<AppState>) => {
  let TeamsState: TeamsState;

  store
    .pipe(select("teams"))
    .subscribe((x) => {
      TeamsState = x;
    })
    .unsubscribe();
  // @ts-ignore
  return TeamsState;
};

export const clearTeams = (store: Store<AppState>) => {
  store.dispatch(ClearTeamsState(undefined));
};
