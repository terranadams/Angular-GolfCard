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
      hole1: 0,
      hole2: 0,
      hole3: 0,
      hole4: 0,
      hole5: 0,
      hole6: 0,
      hole7: 0,
      hole8: 0,
      hole9: 0,
      hole10: 0,
      hole11: 0,
      hole12: 0,
      hole13: 0,
      hole14: 0,
      hole15: 0,
      hole16: 0,
      hole17: 0,
      hole18: 0,
      out: 0,
      in: 0,
      total: 0
    },
    {
      name: '',
      hole1: 0,
      hole2: 0,
      hole3: 0,
      hole4: 0,
      hole5: 0,
      hole6: 0,
      hole7: 0,
      hole8: 0,
      hole9: 0,
      hole10: 0,
      hole11: 0,
      hole12: 0,
      hole13: 0,
      hole14: 0,
      hole15: 0,
      hole16: 0,
      hole17: 0,
      hole18: 0,
      out: 0,
      in: 0,
      total: 0
    },
    {
      name: '',
      hole1: 0,
      hole2: 0,
      hole3: 0,
      hole4: 0,
      hole5: 0,
      hole6: 0,
      hole7: 0,
      hole8: 0,
      hole9: 0,
      hole10: 0,
      hole11: 0,
      hole12: 0,
      hole13: 0,
      hole14: 0,
      hole15: 0,
      hole16: 0,
      hole17: 0,
      hole18: 0,
      out: 0,
      in: 0,
      total: 0
    },
    {
      name: '',
      hole1: 0,
      hole2: 0,
      hole3: 0,
      hole4: 0,
      hole5: 0,
      hole6: 0,
      hole7: 0,
      hole8: 0,
      hole9: 0,
      hole10: 0,
      hole11: 0,
      hole12: 0,
      hole13: 0,
      hole14: 0,
      hole15: 0,
      hole16: 0,
      hole17: 0,
      hole18: 0,
      out: 0,
      in: 0,
      total: 0
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
        if (this.difficulty == 'men' && this.courseID == '19002') this.difficultyNum = 1
        if (this.difficulty == 'women' && this.courseID == '19002') this.difficultyNum = 2

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
