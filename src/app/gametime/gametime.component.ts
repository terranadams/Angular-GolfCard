import { Component, OnInit } from '@angular/core';
import { GameData } from 'src/services/gameData.service';

@Component({
  selector: 'app-gametime',
  templateUrl: './gametime.component.html',
  styleUrls: ['./gametime.component.css']
})
export class GametimeComponent implements OnInit {

  gameObject: any = {}

  constructor(private gameData: GameData) { }

  ngOnInit(): void {
    this.gameObject = this.gameData.getGameObject()
    console.log(this.gameObject)
  }

}
