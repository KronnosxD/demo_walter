import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/components/services/user.services';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  messageFromServer;
  username: any;
  password: any;
  identity;
  status;
  regex
  constructor(private _userService: UserService, private _router: Router, private _route: ActivatedRoute, ) {
    this.username = "";
    this.password = "";
    this.regex = new RegExp('^0*(\\d{1,3}(\\.?\\d{3})*)\\-?([\\dkK])$');
  }

  ngOnInit() {
  }

  validateInputRoleName(event) {

    
    if (this.regex.test(this.username)) {
      this.status = 1;
    } else {
      this.status = 0;
    }
  }

  login() {
    console.log("aqui");


    if (this.status == 1) {
      this._userService.login(this.username, this.password).subscribe(
        response => {
          console.log(response[0])
          if(response[0].nombre.length==0 || response[0].rut.length==0){
            this.messageFromServer = "El usuario no exíste."
            this.status = 3;
          }else {
            this.identity = response;
            localStorage.setItem('identity', JSON.stringify(this.identity));
            this._router.navigate(['/']);
            this.status = 1;
          }
          
          //this.messageFromServer = response;
        }, error => {
          console.log("en error: ", error);
        }
      )
    } else {
      this.status = 0;
    }
    /* 
    */
  }

 
}
