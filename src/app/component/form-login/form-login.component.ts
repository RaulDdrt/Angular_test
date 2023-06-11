import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})



export class FormLoginComponent {

  public correo: string = ""
  public contrasena : string = ""
  
  onSubmit(form:NgForm) {
    console.log("email:", this.correo)
    console.log("password", this.contrasena)
  }

}
