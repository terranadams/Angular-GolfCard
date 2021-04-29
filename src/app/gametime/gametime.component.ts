import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/gameData.service';
import { CoursesService } from '../services/courses.service';
import { FirebaseService } from '../services/firebase.service';

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

  tapped = [false, false, false, false];

  // saveToFire(gameData: any) {
  //   this.db.collection('games-played').add(gameData);
  // }

  calculate(player) {
    this.calculateOut(player);
    this.calculateIn(player);
    player.total = player.out + player.in;

    player.ticker = 0;
    for (let i = 0; i < 18; i++) {
      if (player.holes[i].score > 0) {
        player.ticker++;
      }
      // console.log(`Clicked player's ticker: ${player.ticker}`);
      // console.log("All tickers")
      // console.log(typeof this.gameData.players)
      // this.gameData.players.array.forEach(x => {
      //   console.log(x.ticker)
      // });
      // console.log('This player\'s ticker')
      // console.log(player.ticker)
    }
    if (this.gameData.players.length == 1) {
      if (player.ticker == 18) this.endGame();
    }
    this.calculateAll();
  }



  calculateAll() {
    this.totalTicker = 0;
    // console.log(this.gameData);
    // console.log(this.gameData.players);
    // console.log(this.gameData.players[1].ticker);
    for (let i = 0; i < this.gameData.players.length; i++) {
    this.totalTicker += this.gameData.players[i].ticker
    }
    if (this.gameData.players.length == 1 && this.totalTicker == 18)
      this.endGame(); 
    if (this.gameData.players.length == 2 && this.totalTicker == 36)
      this.endGame();
    if (this.gameData.players.length == 3 && this.totalTicker == 54)
      this.endGame();
    if (this.gameData.players.length == 4 && this.totalTicker == 72)
      this.endGame();
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

  endGame(): void {
    // This function displays the scores when the finishGame() button gets rendered after all the inputs are filled
    this.gameOver = true;

    for (let i = 0; i < this.gameData.players.length; i++) {
      if (this.gameData.players[i].total > this.parTotal)
        this.gameData.players[i].message = 'Better luck next time!';
      else if (this.gameData.players[i].total == this.parTotal)
        this.gameData.players[i].message = 'Right on Par!';
      else if (this.gameData.players[i].total < this.parTotal)
        this.gameData.players[i].message = 'Onto the PGA!!!';
    }
  }

  finishGame(): void {
    this.firebase.addUser(this.gameData);
    this.saveComplete = true;
  }

  constructor(
    private gameService: GameService,
    private coursesService: CoursesService,
    public firebase: FirebaseService
  ) {}

  ngOnInit(): void {
    // if (!this.difficultyNum) {
    //   this.gameData = {
    //     course: '18300',
    //     difficultyNum: 'champion',
    //     players: [{
    //       name: "Terran",
    //       holes: [
        
    //       {
    //         score: 0,
    //       }
    //     ,
        
    //       {
    //         score: 0,
    //       }
    //     ,
        
    //       {
    //         score: 0,
    //       }
    //     ,
        
    //       {
    //         score: 0,
    //       }
    //     ,
        
    //       {
    //         score: 0,
    //       }
    //     ,
    //       {
    //         score: 0,
    //       }
    //     ,
        
    //       {
    //         score: 0,
    //       }
    //     ,
        
    //       {
    //         score: 0,
    //       }
    //     ,
        
    //       {
    //         score: 0,
    //       }
    //     ,
        
    //       {
    //         score: 0,
    //       }
    //     ,
        
    //       {
    //         score: 0,
    //       }
    //     ,
        
    //       {
    //         score: 0,
    //       }
    //     ,
        
    //       {
    //         score: 0,
    //       }
    //     ,
        
    //       {
    //         score: 0,
    //       }
    //     ,
        
    //       {
    //         score: 0,
    //       }
    //     ,
        
    //       {
    //         score: 0,
    //       }
    //     ,
        
    //       {
    //         score: 0,
    //       }
    //     ,
        
    //       {
    //         score: 0,
    //       }
    //   ],
    //   out: 0,
    //   in: 0,
    //   total: 0,
    //   message: '',
    //   ticker: 0
    //     },{
    //       name: "Mackayla",
    //       holes: [
        
    //       {
    //         score: 0,
    //       }
    //     ,
        
    //       {
    //         score: 0,
    //       }
    //     ,
        
    //       {
    //         score: 0,
    //       }
    //     ,
        
    //       {
    //         score: 0,
    //       }
    //     ,
        
    //       {
    //         score: 0,
    //       }
    //     ,
    //       {
    //         score: 0,
    //       }
    //     ,
        
    //       {
    //         score: 0,
    //       }
    //     ,
        
    //       {
    //         score: 0,
    //       }
    //     ,
        
    //       {
    //         score: 0,
    //       }
    //     ,
        
    //       {
    //         score: 0,
    //       }
    //     ,
        
    //       {
    //         score: 0,
    //       }
    //     ,
        
    //       {
    //         score: 0,
    //       }
    //     ,
        
    //       {
    //         score: 0,
    //       }
    //     ,
        
    //       {
    //         score: 0,
    //       }
    //     ,
        
    //       {
    //         score: 0,
    //       }
    //     ,
        
    //       {
    //         score: 0,
    //       }
    //     ,
        
    //       {
    //         score: 0,
    //       }
    //     ,
        
    //       {
    //         score: 0,
    //       }
    //   ],
    //   out: 0,
    //   in: 0,
    //   total: 0,
    //   message: '',
    //   ticker: 0
    //     },{
    //       name: "Sam",
    //       holes: [
        
    //       {
    //         score: 0,
    //       }
    //     ,
        
    //       {
    //         score: 0,
    //       }
    //     ,
        
    //       {
    //         score: 0,
    //       }
    //     ,
        
    //       {
    //         score: 0,
    //       }
    //     ,
        
    //       {
    //         score: 0,
    //       }
    //     ,
    //       {
    //         score: 0,
    //       }
    //     ,
        
    //       {
    //         score: 0,
    //       }
    //     ,
        
    //       {
    //         score: 0,
    //       }
    //     ,
        
    //       {
    //         score: 0,
    //       }
    //     ,
        
    //       {
    //         score: 0,
    //       }
    //     ,
        
    //       {
    //         score: 0,
    //       }
    //     ,
        
    //       {
    //         score: 0,
    //       }
    //     ,
        
    //       {
    //         score: 0,
    //       }
    //     ,
        
    //       {
    //         score: 0,
    //       }
    //     ,
        
    //       {
    //         score: 0,
    //       }
    //     ,
        
    //       {
    //         score: 0,
    //       }
    //     ,
        
    //       {
    //         score: 0,
    //       }
    //     ,
        
    //       {
    //         score: 0,
    //       }
    //   ],
    //   out: 0,
    //   in: 0,
    //   total: 0,
    //   message: '',
    //   ticker: 0
    //     }],
    //   };
    //   this.coursesService.getCourse('18300').subscribe((x) => {
    //     this.courseData = x;
    //     this.dataIn = true;
    //     this.courseData.data.holes.forEach((x) => {
    //       this.parTotal += x.teeBoxes[this.difficultyNum].par;
    //       this.yardsTotal += x.teeBoxes[this.difficultyNum].yards;
    //       this.handicapTotal += x.teeBoxes[this.difficultyNum].hcp;
    //     });
    //   });
    // } else {
      this.gameData = this.gameService.getGameObject();
      // console.log(this.gameData);
      // console.log(Array.isArray(this.gameData.players))
      // console.log(typeof this.gameData.players)
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
    // }
  }
}
