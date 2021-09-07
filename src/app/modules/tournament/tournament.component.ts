import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss']
})
export class TournamentComponent implements OnInit {
  public tournamentName?: string;

  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('resolved: ', this.dataResolved.details);
    this.route.params.subscribe((params: any) => this.tournamentName = params['name']);
  }

  get dataResolved(): any {
    return this.route.snapshot.data;
  }

}
