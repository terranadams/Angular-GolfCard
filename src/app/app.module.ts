import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CoursesService } from 'src/app/services/courses.service';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions/questions.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { GametimeComponent } from './gametime/gametime.component';
import { GameService } from './services/gameData.service'




@NgModule({
  declarations: [AppComponent, QuestionsComponent, GametimeComponent],
  imports: [
     BrowserModule, AppRoutingModule, HttpClientModule,
     FormsModule,
     AngularFireModule.initializeApp(environment.firebase),
     AngularFirestoreModule,
  ],
  providers: [CoursesService, GameService],
  bootstrap: [AppComponent], 
})
export class AppModule {}
