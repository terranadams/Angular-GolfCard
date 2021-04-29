import { Component, OnInit } from '@angular/core';
import { Player } from '../interfaces/player';
import { GameService } from '../services/gameData.service';
import { CoursesService } from '../services/courses.service';
import { AbstractControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
})
export class QuestionsComponent implements OnInit {
  form: boolean = true;
  duplicateNames: boolean = false;
  letsPlayButton: boolean = false;
  gimmenames: boolean = false;
  courseID: string;
  numberOfPlayersSelection: number;
  difficulty: string;
  difficultyNum: number;
  playerCountArray: number[] = [];
  begin: boolean = false;
  playersArray: Player[] = [
    {
      name: '',
      holes: [
        
          {
            score: 0,
          }
        ,
        
          {
            score: 0,
          }
        ,
        
          {
            score: 0,
          }
        ,
        
          {
            score: 0,
          }
        ,
        
          {
            score: 0,
          }
        ,
          {
            score: 0,
          }
        ,
        
          {
            score: 0,
          }
        ,
        
          {
            score: 0,
          }
        ,
        
          {
            score: 0,
          }
        ,
        
          {
            score: 0,
          }
        ,
        
          {
            score: 0,
          }
        ,
        
          {
            score: 0,
          }
        ,
        
          {
            score: 0,
          }
        ,
        
          {
            score: 0,
          }
        ,
        
          {
            score: 0,
          }
        ,
        
          {
            score: 0,
          }
        ,
        
          {
            score: 0,
          }
        ,
        
          {
            score: 0,
          }
      ],
      out: 0,
      in: 0,
      total: 0,
      message: '',
      ticker: 0
    }, {
      name: '',
      holes: [
        
          {
            score: 0,
          }
        ,
        
          {
            score: 0,
          }
        ,
        
          {
            score: 0,
          }
        ,
        
          {
            score: 0,
          }
        ,
        
          {
            score: 0,
          }
        ,
          {
            score: 0,
          }
        ,
        
          {
            score: 0,
          }
        ,
        
          {
            score: 0,
          }
        ,
        
          {
            score: 0,
          }
        ,
        
          {
            score: 0,
          }
        ,
        
          {
            score: 0,
          }
        ,
        
          {
            score: 0,
          }
        ,
        
          {
            score: 0,
          }
        ,
        
          {
            score: 0,
          }
        ,
        
          {
            score: 0,
          }
        ,
        
          {
            score: 0,
          }
        ,
        
          {
            score: 0,
          }
        ,
        
          {
            score: 0,
          }
      ],
      out: 0,
      in: 0,
      total: 0,
      message: '',
      ticker: 0
    }, {
      name: '',
      holes: [
        
          {
            score: 0,
          }
        ,
        
          {
            score: 0,
          }
        ,
        
          {
            score: 0,
          }
        ,
        
          {
            score: 0,
          }
        ,
        
          {
            score: 0,
          }
        ,
          {
            score: 0,
          }
        ,
        
          {
            score: 0,
          }
        ,
        
          {
            score: 0,
          }
        ,
        
          {
            score: 0,
          }
        ,
        
          {
            score: 0,
          }
        ,
        
          {
            score: 0,
          }
        ,
        
          {
            score: 0,
          }
        ,
        
          {
            score: 0,
          }
        ,
        
          {
            score: 0,
          }
        ,
        
          {
            score: 0,
          }
        ,
        
          {
            score: 0,
          }
        ,
        
          {
            score: 0,
          }
        ,
        
          {
            score: 0,
          }
      ],
      out: 0,
      in: 0,
      total: 0,
      message: '',
      ticker: 0
    }, {
      name: '',
      holes: [
        
          {
            score: 0,
          }
        ,
        
          {
            score: 0,
          }
        ,
        
          {
            score: 0,
          }
        ,
        
          {
            score: 0,
          }
        ,
        
          {
            score: 0,
          }
        ,
          {
            score: 0,
          }
        ,
        
          {
            score: 0,
          }
        ,
        
          {
            score: 0,
          }
        ,
        
          {
            score: 0,
          }
        ,
        
          {
            score: 0,
          }
        ,
        
          {
            score: 0,
          }
        ,
        
          {
            score: 0,
          }
        ,
        
          {
            score: 0,
          }
        ,
        
          {
            score: 0,
          }
        ,
        
          {
            score: 0,
          }
        ,
        
          {
            score: 0,
          }
        ,
        
          {
            score: 0,
          }
        ,
        
          {
            score: 0,
          }
      ],
      out: 0,
      in: 0,
      total: 0,
      message: '',
      ticker: 0
    }
  ];

  formSubmit(): void {
    if (this.courseID != '') {
      if (
        this.difficulty == 'pro' ||
        this.difficulty == 'champion' ||
        this.difficulty == 'men' ||
        this.difficulty == 'women'
      ) {
        if (this.difficulty == 'pro') this.difficultyNum = 0;
        if (this.difficulty == 'champion') this.difficultyNum = 1;
        if (this.difficulty == 'men') this.difficultyNum = 2;
        if (this.difficulty == 'women') this.difficultyNum = 3;
        if (this.difficulty == 'champion' && this.courseID == '19002')
          this.difficultyNum = 0;

        if (this.numberOfPlayersSelection > 0) {
          this.inputMaker(this.numberOfPlayersSelection);
          this.form = false;
          this.gimmenames = true;
        }
      }
    } 
  }

  inputMaker(n: number): void {
    while (this.playerCountArray.length < n) {
      this.playerCountArray.push(n);
    }
  }

  playerStart: any[] = [];
  

  checkNames(): void {
    // console.log(Array.isArray(this.playerStart))
    // console.log(typeof this.playerStart)
    this.playerStart = this.playersArray.filter((x) => {
      return x.name !== '';
    });

    if (this.playerStart.length == 1) this.letsPlay();
    if (this.playerStart.length == 2) {
      if (this.playerStart[0].name != this.playerStart[1].name) this.letsPlay();
    }
    if (this.playerStart.length == 3) {
      if (
        this.playerStart[0].name != this.playerStart[1].name &&
        this.playerStart[0].name != this.playerStart[2].name &&
        this.playerStart[1].name != this.playerStart[2].name
      )
        this.letsPlay();
    }
    if (this.playerStart.length == 4) {
      if (
        this.playerStart[0].name != this.playerStart[1].name &&
        this.playerStart[0].name != this.playerStart[2].name &&
        this.playerStart[0].name != this.playerStart[3].name &&
        this.playerStart[1].name != this.playerStart[2].name &&
        this.playerStart[1].name != this.playerStart[3].name &&
        this.playerStart[2].name != this.playerStart[3].name
      )
        this.letsPlay();
    } else {
      this.duplicateNames = true;
      this.playerStart = [];
    }
  }

  letsPlay(): void {
    this.gimmenames = false;
    this.letsPlayButton = true;
    this.gameData.setGameObject({
      course: this.courseID,
      difficultyNum: this.difficultyNum,
      players: this.playerStart,
    });
  }

  beginGame(): void {}

  constructor(private gameData: GameService) {}

  ngOnInit(): void {}
}
