export interface TournmentModel {
  id: string;
  name: string;
  countryId: string;
  image: string;
}

export class TournmentsState {
  public tournments: Array<TournmentModel>;

  constructor(tournments: Array<TournmentModel>) {
    this.tournments = tournments;
  }
}
