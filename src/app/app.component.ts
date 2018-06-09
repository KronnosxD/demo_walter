import { Component, DoCheck} from '@angular/core';
import { UserService } from 'app/components/services/user.services';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements DoCheck{
  title = 'app';
  identity;
  constructor(private _userService: UserService){
      this.identity=localStorage.getItem("identity");

  }
  ngDoCheck(){
    this.identity = localStorage.getItem("identity");
  }
}

