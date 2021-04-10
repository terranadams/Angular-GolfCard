import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GametimeComponent } from './gametime/gametime.component';
import { QuestionsComponent } from './questions/questions.component';



const appRoutes: Routes = [
  { path: '', component: QuestionsComponent },
  { path: 'gametime', component: GametimeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
