import { Component, OnInit } from '@angular/core';
import { TeachersService } from './teachers.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  data : any;

  constructor(private techerService : TeachersService) { }

  ngOnInit() {
    this.techerService.getData().subscribe(res => this.data=res);
  }
}
