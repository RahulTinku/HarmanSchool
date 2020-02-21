import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
/**Check url to find weather app is in  home route*/
  isHomePage(){
    if(window.location.href.split('#')[1] === '/home'){
      return true;
    }
    return false;
  }
}
