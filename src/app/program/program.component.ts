import { Component, OnInit } from '@angular/core';
import { ProgramService } from './program.service';
/**Import icons form fontawesome */
import { faGraduationCap, faUniversity } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {
  //adding variable for font awesom
  faGraduationCap = faGraduationCap;
  faUniversity = faUniversity;
  //variable to store data fro api response
  data :any;
  
  constructor(private programService : ProgramService) { }

  ngOnInit() {
    //call getData method from Program Service to get data form API
    this.programService.getData().subscribe(res => this.data = res)
  }

}
