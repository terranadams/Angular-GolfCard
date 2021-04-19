import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
    providedIn: 'root',
  })

  export class GameService {

    constructor(private http: HttpClient) {}

    gameObject: any 

    getGameObject() {
      return this.gameObject
    }

    setGameObject(x: any): void {
      this.gameObject = x
    }

    
  
  }