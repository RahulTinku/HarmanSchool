import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faUsers, faComment } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  /**Set variables for fontawesome and data to display */
  faClock = faClock;
  faUsers = faUsers;
  faComment= faComment;
  data : any;

  constructor(private courseService : CourseService) { }

  ngOnInit() {
    /**Get data from service on init */
    this.courseService.getData().subscribe(res => this.data = res)
  }
}
