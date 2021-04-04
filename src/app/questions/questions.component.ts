import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service'


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  courseGood: boolean = true
  difficultyGood: boolean = false
  playerCountGood: boolean = false
  namesGood: boolean = false
  
  courseID: string
  playerCount: number
  difficulty: string
  playerCountArray: number[] = []

  begin: boolean = false

  arrayMaker(n: number): void {
    if (this.playerCountArray.length > n) {
      this.playerCountArray.push(n)
    } 
  }

  selectCourse(): void {
    this.courseGood = false
    this.difficultyGood = true
  }

  selectDiff(): void {
    this.difficultyGood = false
    this.playerCountGood = true
  }

  numOfPlayers(): void {
    this.difficultyGood = false
    this.namesGood = true

    this.arrayMaker(this.playerCount)
  }

  console(): void{
    console.log(this.playerCount, this.playerCount + 2)
  }


  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {}

}
