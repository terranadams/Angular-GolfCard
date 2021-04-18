import { Component, OnInit } from '@angular/core';
import { Player } from '../interfaces/player';
import { GameService } from '../services/gameData.service'
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
})
export class QuestionsComponent implements OnInit {
  form: boolean = true;
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
      hole1: {
        score: 0,
        tapped: false
      },
      hole2: {
        score: 0,
        tapped: false
      },
      hole3: {
        score: 0,
        tapped: false
      },
      hole4: {
        score: 0,
        tapped: false
      },
      hole5: {
        score: 0,
        tapped: false
      },
      hole6: {
        score: 0,
        tapped: false
      },
      hole7: {
        score: 0,
        tapped: false
      },
      hole8: {
        score: 0,
        tapped: false
      },
      hole9: {
        score: 0,
        tapped: false
      },
      hole10: {
        score: 0,
        tapped: false
      },
      hole11: {
        score: 0,
        tapped: false
      },
      hole12: {
        score: 0,
        tapped: false
      },
      hole13: {
        score: 0,
        tapped: false
      },
      hole14: {
        score: 0,
        tapped: false
      },
      hole15: {
        score: 0,
        tapped: false
      },
      hole16: {
        score: 0,
        tapped: false
      },
      hole17: {
        score: 0,
        tapped: false
      },
      hole18: {
        score: 0,
        tapped: false
      },
      out: 0,
      in: 0,
      total: 0,
      message: ''
    },
    {
      name: '',
      hole1: {
        score: 0,
        tapped: false
      },
      hole2: {
        score: 0,
        tapped: false
      },
      hole3: {
        score: 0,
        tapped: false
      },
      hole4: {
        score: 0,
        tapped: false
      },
      hole5: {
        score: 0,
        tapped: false
      },
      hole6: {
        score: 0,
        tapped: false
      },
      hole7: {
        score: 0,
        tapped: false
      },
      hole8: {
        score: 0,
        tapped: false
      },
      hole9: {
        score: 0,
        tapped: false
      },
      hole10: {
        score: 0,
        tapped: false
      },
      hole11: {
        score: 0,
        tapped: false
      },
      hole12: {
        score: 0,
        tapped: false
      },
      hole13: {
        score: 0,
        tapped: false
      },
      hole14: {
        score: 0,
        tapped: false
      },
      hole15: {
        score: 0,
        tapped: false
      },
      hole16: {
        score: 0,
        tapped: false
      },
      hole17: {
        score: 0,
        tapped: false
      },
      hole18: {
        score: 0,
        tapped: false
      },
      out: 0,
      in: 0,
      total: 0,
      message: ''
    },
    {
      name: '',
      hole1: {
        score: 0,
        tapped: false
      },
      hole2: {
        score: 0,
        tapped: false
      },
      hole3: {
        score: 0,
        tapped: false
      },
      hole4: {
        score: 0,
        tapped: false
      },
      hole5: {
        score: 0,
        tapped: false
      },
      hole6: {
        score: 0,
        tapped: false
      },
      hole7: {
        score: 0,
        tapped: false
      },
      hole8: {
        score: 0,
        tapped: false
      },
      hole9: {
        score: 0,
        tapped: false
      },
      hole10: {
        score: 0,
        tapped: false
      },
      hole11: {
        score: 0,
        tapped: false
      },
      hole12: {
        score: 0,
        tapped: false
      },
      hole13: {
        score: 0,
        tapped: false
      },
      hole14: {
        score: 0,
        tapped: false
      },
      hole15: {
        score: 0,
        tapped: false
      },
      hole16: {
        score: 0,
        tapped: false
      },
      hole17: {
        score: 0,
        tapped: false
      },
      hole18: {
        score: 0,
        tapped: false
      },
      out: 0,
      in: 0,
      total: 0,
      message: ''
    },
    {
      name: '',
      hole1: {
        score: 0,
        tapped: false
      },
      hole2: {
        score: 0,
        tapped: false
      },
      hole3: {
        score: 0,
        tapped: false
      },
      hole4: {
        score: 0,
        tapped: false
      },
      hole5: {
        score: 0,
        tapped: false
      },
      hole6: {
        score: 0,
        tapped: false
      },
      hole7: {
        score: 0,
        tapped: false
      },
      hole8: {
        score: 0,
        tapped: false
      },
      hole9: {
        score: 0,
        tapped: false
      },
      hole10: {
        score: 0,
        tapped: false
      },
      hole11: {
        score: 0,
        tapped: false
      },
      hole12: {
        score: 0,
        tapped: false
      },
      hole13: {
        score: 0,
        tapped: false
      },
      hole14: {
        score: 0,
        tapped: false
      },
      hole15: {
        score: 0,
        tapped: false
      },
      hole16: {
        score: 0,
        tapped: false
      },
      hole17: {
        score: 0,
        tapped: false
      },
      hole18: {
        score: 0,
        tapped: false
      },
      out: 0,
      in: 0,
      total: 0,
      message: ''
    },
  ];

  formSubmit(): void {
    if (
      this.courseID == '18300' ||
      this.courseID == '11819' ||
      this.courseID == '19002'
    ) {
      if (
        this.difficulty == 'pro' ||
        this.difficulty == 'champion' ||
        this.difficulty == 'men' ||
        this.difficulty == 'women'
      ) {
        if (this.difficulty == 'pro') this.difficultyNum = 0
        if (this.difficulty == 'champion') this.difficultyNum = 1
        if (this.difficulty == 'men') this.difficultyNum = 2
        if (this.difficulty == 'women') this.difficultyNum = 3
        if (this.difficulty == 'champion' && this.courseID == '19002') this.difficultyNum = 0

        if (this.numberOfPlayersSelection > 0) {
          this.inputMaker(this.numberOfPlayersSelection);
          this.form = false;
          this.gimmenames = true
        }
      }
    }
  }

  inputMaker(n: number): void {
    while (this.playerCountArray.length < n) {
      this.playerCountArray.push(n);
    }
  }

  playerStart: Player[] = [];

  checkNames(): void {
    this.playerStart = this.playersArray.filter((x) => {
      return x.name !== '';
    });
    this.letsPlay()
  }

  letsPlay(): void {
    this.gimmenames = false;
    this.letsPlayButton = true;
    this.gameData.setGameObject({
      course: this.courseID,
      difficultyNum: this.difficultyNum,
      players: this.playerStart
    })
    
  }
  
  
  beginGame(): void {
  }


  constructor(private gameData: GameService) {}

  ngOnInit(): void {}
}
