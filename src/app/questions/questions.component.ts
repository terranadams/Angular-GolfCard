import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service'


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  courseGood: boolean = true
  playerCountGood: boolean = false
  difficultyGood: boolean = false
  
  courseID: string
  playerCount: string
  difficulty: string

  begin: boolean = false

  selectCourse(): void {
    this.courseGood = false
    this.playerCountGood = true

  }

  numOfPlayers(): void {
    this.playerCountGood = false
    this.difficultyGood = true
  }

  selectDiff(): void {
    this.difficultyGood = false
    this.begin = true
  }

  start(): void {
    console.log(this.courseID, this.playerCount, this.difficulty)
  }

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {}

}
