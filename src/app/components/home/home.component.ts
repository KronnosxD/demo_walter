import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements DoCheck {
  userInfo;
  constructor() {
    this.userInfo ="";
   }

  ngDoCheck() {
    if( localStorage.getItem("identity")){
      this.userInfo =  JSON.parse(localStorage.getItem("identity"));
    }
  }
  logout(){
    localStorage.clear();
    location.reload();
  }

}
