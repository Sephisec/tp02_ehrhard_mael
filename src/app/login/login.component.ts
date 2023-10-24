import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login: string = "toto";
  valid: boolean = false;

/*  toggle() {
    this.valid=!this.valid;
  }*/
}
