import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service'


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  courseRender: boolean = true
  difficultyRender: boolean = false
  playerCountRender: boolean = false
  nameAskRender: boolean = false
  
  courseID: string
  playerCount: number
  difficulty: string
  playerCountArray: number[] = []

  begin: boolean = false

  

  selectCourse(): void {
    this.courseRender = false
    this.difficultyRender = true
  }

  selectDiff(): void {
    this.difficultyRender = false
    this.playerCountRender = true
  }

  numOfPlayers(): void {
    this.playerCountRender = false
    this.difficultyRender = false
    this.nameAskRender = true

    this.arrayMaker(this.playerCount)
  }

  arrayMaker(n: number): void {
    if (this.playerCountArray.length < n) {
      this.playerCountArray.push(n)
    } 
  }

  console(): void{

  }


  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {}

}
