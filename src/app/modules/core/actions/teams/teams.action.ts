import { ActionModel } from "../../store/action.model";

export enum TeamsActionTypes {
  UpdateTeams = 'UPDATE_TEAMS',
  ClearTeamsState = 'CLEAR_TEAMS_STATE',
}

export const UpdateTeams = (data: any) => {
  return { type: TeamsActionTypes.UpdateTeams, payload: data } as ActionModel;
};

export const ClearTeamsState = (data: any) => {
  return { type: TeamsActionTypes.ClearTeamsState, payload: data } as ActionModel;
};
