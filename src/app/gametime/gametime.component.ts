import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/gameData.service';
import { CoursesService } from '../services/courses.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-gametime',
  templateUrl: './gametime.component.html',
  styleUrls: ['./gametime.component.css'],
})
export class GametimeComponent implements OnInit {
  ticker: number = 0;
  gameOver: boolean = false;
  saveComplete: boolean = false;

  yardsTotal = 0;
  handicapTotal = 0;
  parTotal = 0;

  gameData: any;
  courseData: any;
  difficultyNum: number;
  dataIn: boolean = false;

  saveToFire(gameData: any) {
    this.db.collection('games-played').add(gameData);
  }

  calculate(player) {
    this.calculateOut(player)
    this.calculateIn(player)
    this.ticker = 0

    for (let i = 0; i < 18; i++) {
      if (player.holes[i].score > 0) {
        this.ticker++
      }
      if (this.gameData.players.length == 1 && this.ticker == 18) this.endGame(); // These are used for the program to know when to let the user end the game.
      if (this.gameData.players.length == 2 && this.ticker == 36) this.endGame();
      if (this.gameData.players.length == 3 && this.ticker == 54) this.endGame();
      if (this.gameData.players.length == 4 && this.ticker == 72) this.endGame();
    }
  }

  // This function runs every time an input is changed. It runs the math for the totals and checks 
  // if every input has been filled before displaying the 'finish game' button.
  calculateOut(player): void {
    player.out = 1;
    for (let i = 0; i < 9; i++) {
      player.out += player.holes[i].score;
    }    
  }

  // This function runs every time an input is changed. It runs the math for the totals and checks 
  // if every input has been filled before displaying the 'finish game' button.
  calculateIn(player): void {
    player.in = 0;
    for (let i = 9; i < 18; i++) {
      player.in += player.holes[i].score;
    }
  }

  endGame(): void { // This function displays the scores when the finishGame() button gets rendered after all the inputs are filled
    this.gameOver = true

    this.gameData.players.foreach((player) => {
      if (player.total > this.parTotal) {
        player.message = 'Better luck next time!';
      } else if (player.total == this.parTotal) {
        player.message = 'Right on Par!';
      } else {
        player.message = 'Better luck next time!';
      }
    });
  }

  finishGame(): void {
    this.saveToFire(this.gameData)
    this.saveComplete = true;
  }

  constructor(
    private gameService: GameService,
    private coursesService: CoursesService,
    private db: AngularFirestore
  ) {}

  ngOnInit(): void {
    this.gameData = this.gameService.getGameObject();
    console.log(this.gameData);
    this.difficultyNum = this.gameData.difficultyNum;
    this.coursesService.getCourse(this.gameData.course).subscribe((x) => {
      this.courseData = x;
      this.dataIn = true;
      this.courseData.data.holes.forEach((x) => {
        this.parTotal += x.teeBoxes[this.difficultyNum].par;
        this.yardsTotal += x.teeBoxes[this.difficultyNum].yards;
        this.handicapTotal += x.teeBoxes[this.difficultyNum].hcp;
      });
    });
  }
}
