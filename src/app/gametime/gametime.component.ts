import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/gameData.service';
import { CoursesService } from '../services/courses.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { throttle } from 'rxjs/operators';

@Component({
  selector: 'app-gametime',
  templateUrl: './gametime.component.html',
  styleUrls: ['./gametime.component.css'],
})
export class GametimeComponent implements OnInit {
  totalTicker: number = 0;
  gameOver: boolean = false;
  saveComplete: boolean = false;

  yardsTotal = 0;
  handicapTotal = 0;
  parTotal = 0;

  gameData: any;
  courseData: any;
  difficultyNum: number;
  dataIn: boolean = false;

  tapped = [false, false, false, false]

  saveToFire(gameData: any) {
    this.db.collection('games-played').add(gameData);
  }

  calculate(player) {
    this.calculateOut(player)
    this.calculateIn(player)
    player.total = player.out + player.in

    player.ticker = 0
    for (let i = 0; i < 18; i++) {
      if (player.holes[i].score > 0) {
        player.ticker++
        // console.log(player.ticker)
      }
    }
    this.calculateAll()
    
  }
  
  
  calculateAll() {
    this.totalTicker = 0
    for (let i = 0; i < 4; i++) {
      this.totalTicker += this.gameData.players[i].ticker
      // console.log(this.gameData.players[i].ticker)
      console.log(this.totalTicker)
    }
    if (this.gameData.players.length == 1 && this.totalTicker == 18) this.endGame(); // These are used for the program to know when to let the user end the game.
    if (this.gameData.players.length == 2 && this.totalTicker == 36) this.endGame();
    if (this.gameData.players.length == 3 && this.totalTicker == 54) this.endGame();
    if (this.gameData.players.length == 4 && this.totalTicker == 72) this.endGame();
  }

  calculateOut(player): void {
    player.out = 0;
    for (let i = 0; i < 9; i++) {
      player.out += player.holes[i].score;
    }    
  }

  calculateIn(player): void {
    player.in = 0;
    for (let i = 9; i < 18; i++) {
      player.in += player.holes[i].score;
    }
  }

  endGame(): void { // This function displays the scores when the finishGame() button gets rendered after all the inputs are filled
    this.gameOver = true

    for (let i = 0; i < this.gameData.players.length; i++) {
      if (this.gameData.players[i].total > this.parTotal) this.gameData.players[i].message = 'Better luck next time!'
      else if (this.gameData.players[i].total == this.parTotal) this.gameData.players[i].message = 'Right on Par!'
      else if (this.gameData.players[i].total < this.parTotal) this.gameData.players[i].message = 'Onto the PGA!!!'
    }

    // this.gameData.players.foreach((player) => {
    //   if (player.total > this.parTotal) {
    //     player.message = 'Better luck next time!';
    //   } else if (player.total == this.parTotal) {
    //     player.message = 'Right on Par!';
    //   } else {
    //     player.message = 'Onto the PGA!!!';
    //   }
    // });
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
