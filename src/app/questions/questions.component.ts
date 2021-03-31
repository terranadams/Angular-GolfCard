import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  
  courseID: number

  selectCourse(): void {
    console.log(this.courseID)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
