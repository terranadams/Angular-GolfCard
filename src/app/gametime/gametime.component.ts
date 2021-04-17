import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/gameData.service';
import { CoursesService } from '../services/courses.service'

@Component({
  selector: 'app-gametime',
  templateUrl: './gametime.component.html',
  styleUrls: ['./gametime.component.css']
})
export class GametimeComponent implements OnInit {

  ticker: number = 0;

  yardsTotal = 0
  handicapTotal = 0
  parTotal = 0

  gameData: any 
  courseData: any
  difficultyNum: number
  dataIn: boolean = false 

  add(): void {
    this.gameData.players.foreach(x => {
      for(let i = 1; i <= 10; i++) {
        if(x[i].tapped == false) {this.ticker++; x[i].tapped = true;}
        
        this.gameData.players[x].out = 0
        this.gameData.players[x].out += this.gameData.players[i].score
      }
      for(let i = 11; i <= 19; i++) {
        if(x[i].tapped == false) {this.ticker++; x[i].tapped = true;}
        this.gameData.players[x].in = 0
        this.gameData.players[x].in += this.gameData.players[i].score
      }
      this.gameData.players[x].total = 0 
      this.gameData.players[x].total = this.gameData.players[x].in + this.gameData.players[x].out


    })

  }

  constructor(
    private gameService: GameService,
    private coursesService: CoursesService
    ) {}
  
  ngOnInit(): void {
    this.gameData = this.gameService.getGameObject()
    this.difficultyNum = this.gameData.difficultyNum
    this.coursesService.getCourse(this.gameData.course).subscribe(x => {
      this.courseData = x
      this.dataIn = true;
      console.log(this.gameData.players)
    })


  }

}
