import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CoursesService } from 'src/services/courses.service';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AlertModule } from './alert';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions/questions.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';

@NgModule({
  declarations: [AppComponent, QuestionsComponent],
  imports: [
     BrowserModule, AppRoutingModule, HttpClientModule,
     FormsModule,
     AngularFireModule.initializeApp(environment.firebase),
     AngularFirestoreModule,
     AlertModule
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent], 
})
export class AppModule {}
