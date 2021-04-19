import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/gameData.service';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-gametime',
  templateUrl: './gametime.component.html',
  styleUrls: ['./gametime.component.css'],
})
export class GametimeComponent implements OnInit {
  ticker: number = 0;
  gameOver: boolean = false

  yardsTotal = 0;
  handicapTotal = 0;
  parTotal = 0;

  gameData: any;
  courseData: any;
  difficultyNum: number;
  dataIn: boolean = false;

  add(): void {
    this.gameData.players.foreach((x) => {
      for (let i = 1; i <= 10; i++) {
        if (x[i].tapped == false) {
          this.ticker++;
          x[i].tapped = true;
        }

        this.gameData.players[x].out = 0;
        this.gameData.players[x].out += this.gameData.players[i].score;
      }
      for (let i = 11; i <= 19; i++) {
        if (x[i].tapped == false) {
          this.ticker++;
          x[i].tapped = true;
        }
        this.gameData.players[x].in = 0;
        this.gameData.players[x].in += this.gameData.players[i].score;
      }
      this.gameData.players[x].total = 0;
      this.gameData.players[x].total =
        this.gameData.players[x].in + this.gameData.players[x].out;
    });

    if (this.gameData.players.length == 1 && this.ticker == 18) this.endGame();
    if (this.gameData.players.length == 2 && this.ticker == 36) this.endGame();
    if (this.gameData.players.length == 3 && this.ticker == 54) this.endGame();
    if (this.gameData.players.length == 4 && this.ticker == 72) this.endGame();
  }

  endGame(): void {
    this.gameData.players.foreach((player) => {
      if (player.total > this.parTotal) {
        player.message = 'Better luck next time!';
      } else if (player.total == this.parTotal) {
        player.message = 'Right on Par!'
      } else {
        player.message = 'Better luck next time!'
      }
    });
  }

  constructor(
    private gameService: GameService,
    private coursesService: CoursesService
  ) {}

  ngOnInit(): void {
    this.gameData = this.gameService.getGameObject();
    console.log(this.gameData)
    this.difficultyNum = this.gameData.difficultyNum;
    this.coursesService.getCourse(this.gameData.course).subscribe(x => {
      this.courseData = x;
      this.dataIn = true;
      console.log(this.difficultyNum)
      // console.log(this.courseData.data.holes)
      this.courseData.data.holes.forEach(x => {
        this.parTotal+= x.teeBoxes[this.difficultyNum].par
        this.yardsTotal+= x.teeBoxes[this.difficultyNum].yards
        this.handicapTotal+= x.teeBoxes[this.difficultyNum].hcp
      })
    });
  }
}
