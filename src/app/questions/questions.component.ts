import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { Player } from '../interfaces/player';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
})
export class QuestionsComponent implements OnInit {
  formBegin: boolean = true;
  letsPlay: boolean = false;
  gimmenames: boolean = false;
  courseID: string;
  numberOfPlayersSelection: number;
  difficulty: string;
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
    },
  ];

  form(): void {
    if (
      this.courseID == '18300' ||
      this.courseID == '11819' ||
      this.courseID == '11902'
    ) {
      if (
        this.difficulty == 'champion' ||
        this.difficulty == 'pro' ||
        this.difficulty == 'men' ||
        this.difficulty == 'women'
      ) {
        if (this.numberOfPlayersSelection > 0) {
          this.inputMaker(this.numberOfPlayersSelection);
          this.formBegin = false;
          console.log(this.playerCountArray);
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
    
  }

  beginGame(): void {
    console.log(this.playerStart);
  }

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {}
}
