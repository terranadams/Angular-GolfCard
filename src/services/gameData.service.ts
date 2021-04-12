import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
  })

  export class GameData {

    constructor() {}

    gameObject: any

    getGameObject() {
      return this.gameObject
    }

    setGameObject(x): void {
      this.gameObject = x
    }
  }