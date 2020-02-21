import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  /**Model to keep forms data and isValid to display success message */
  model: any = {};
  isValid = false;
  constructor() { }

  ngOnInit() {
  }
/**Form onsubmit function */
  onSubmit() {
    console.log(this.model);
    this.isValid = true;
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
  }
}
