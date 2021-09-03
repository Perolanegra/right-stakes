import { ActionModel } from "../../store/action.model";

export enum TournmentsActionTypes {
  UpdateTournments = 'UPDATE_Tournments',
  ClearTournmentsState = 'CLEAR_Tournments_STATE',
}

export const UpdateTournments = (data: any) => {
  return { type: TournmentsActionTypes.UpdateTournments, payload: data } as ActionModel;
};

export const ClearTournmentsState = (data: any) => {
  return { type: TournmentsActionTypes.ClearTournmentsState, payload: data } as ActionModel;
};
