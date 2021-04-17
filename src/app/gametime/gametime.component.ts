import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/gameData.service';
import { CoursesService } from '../services/courses.service'

@Component({
  selector: 'app-gametime',
  templateUrl: './gametime.component.html',
  styleUrls: ['./gametime.component.css']
})
export class GametimeComponent implements OnInit {

  gameData: any 
  courseData: any
  difficultyNum: number

  constructor(
    private gameService: GameService,
    private coursesService: CoursesService
    ) {}
  
  ngOnInit(): void {
    this.gameData = this.gameService.getGameObject()
    this.difficultyNum = this.gameData.difficultyNum
    this.coursesService.getCourse(this.gameService.getGameObject().course).subscribe(x => this.courseData = x)


  }

}
