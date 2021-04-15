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
  // courseData: any

  constructor(private gameService: GameService) {}
  
  ngOnInit(): void {
    this.gameData = this.gameService.getGameObject()
    console.log(this.gameData)
  }

}
