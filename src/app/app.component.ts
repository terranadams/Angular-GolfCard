import { Component } from '@angular/core';
import { CoursesService } from 'src/services/courses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'GolfApp';
  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.coursesService.getCourse();
    //this.coursesService.getCourse(18300);
  }

}
