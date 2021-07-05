import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'ScoreCard';
  winCondition: number = 5;
  resetFlag: boolean = false;
  winner: string = null;
  players = [
    {
      name: 'player one',
      score: 0
    },
    {
      name: 'player two',
      score: 0
    }
  ];

  score(index: number) {
    this.players[index].score++;
    if (this.players[index].score == this.winCondition) {
      this.resetFlag = true;
      this.winner = this.players[index].name;
    }
  }

  reset() {
    this.players = [
      {
        name: 'player one',
        score: 0
      },
      {
        name: 'player two',
        score: 0
      }
    ];

    this.resetFlag = false;
    this.winner = null;
  }
}
