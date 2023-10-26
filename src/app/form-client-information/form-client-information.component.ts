import { Component } from '@angular/core';

@Component({
  selector: 'app-form-client-information',
  templateUrl: './form-client-information.component.html',
  styleUrls: ['./form-client-information.component.css']
})
export class FormClientInformationComponent {

  firstname: string = "";
  lastname: string = "";
  login: string = "";
  password: string = "";
  address: string = "";
  postcode: string = "";
  city : string = "";
  country: string = "";
  telephone: string = "";
  email: string = "";
  gender: string= "";

  recap: string = "";

  submit() {
    this.recap=`${this.firstname}\n${this.lastname}\n${this.login}\n${this.password}\n${this.address}\n
    ${this.postcode}\n${this.city}\n${this.country}\n${this.telephone}\n${this.email}\n${this.gender}\n`;
  }
}
