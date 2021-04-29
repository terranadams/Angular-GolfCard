import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  gamesCollection: AngularFirestoreCollection<any>
  games: Observable<any[]>;

  constructor(public afs: AngularFirestore) { 
    this.games = this.afs.collection('games').valueChanges();
  }

  addUser(x) {
    this.gamesCollection.add(x)
  }
}
