import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { Player } from '../interfaces/player';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
})
export class QuestionsComponent implements OnInit {
  courseRender: boolean = true;
  difficultyRender: boolean = false;
  playerCountRender: boolean = false;
  nameAskRender: boolean = false;

  courseID: string;
  playerCount: number;
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

  selectCourse(): void {
    this.courseRender = false;
    this.difficultyRender = true;
  }

  selectDiff(): void {
    this.difficultyRender = false;
    this.playerCountRender = true;
  }

  numOfPlayers(): void {
    this.playerCountRender = false;
    this.difficultyRender = false;
    this.nameAskRender = true;

    this.inputMaker(this.playerCount);
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

    this.playerStart.forEach(x => {
      if (x.name == '') alert("Please don't leave any inputs blank homie")
    
      else {
        for (var i = 0; i < this.playerStart.length; i++) 
        {
            for (var j = 0; j < this.playerStart.length; j++) 
            {
                if (i != j) 
                {
                    if (this.playerStart[i].name == this.playerStart[j].name) 
                    {
                      alert("Please make sure there are no duplicate names G.")
                      break;
                    }
                }
            }
        }
      }
    })

    // if (this.playerStart[1]) {
    //   if (this.playerStart[0].name == this.playerStart[1].name) alert("Please make sure there are no duplicate names G.")
    // }
    // else if (this.playerStart[2]) {
    //   if (this.playerStart[0].name == this.playerStart[2].name || this.playerStart[1].name == this.playerStart[2].name) alert("Please make sure there are no duplicate names G.")
    // }
    // else if (this.playerStart[3]) {
    //   if (this.playerStart[0].name == this.playerStart[3].name || this.playerStart[1].name == this.playerStart[3].name || this.playerStart[2].name == this.playerStart[3].name) alert("Please make sure there are no duplicate names G.")
    // }




    console.log(this.playerStart);
  }

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {}
}
