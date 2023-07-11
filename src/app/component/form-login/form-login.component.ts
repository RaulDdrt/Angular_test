import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserServiceService } from 'src/app/shared/user-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})



export class FormLoginComponent {

  public correo: string = ""
  public contrasena : string = ""
  public user : User
  public formulario: FormGroup
  
  constructor(public userService : UserServiceService, public router : Router){}

  ngOnInit() {
    this.formulario = new FormGroup({
      "correo": new FormControl(null, [Validators.required, Validators.email]),
      "passw": new FormControl(null, Validators.required)
    });
  }
  
  onSubmit() {

    let correo = this.formulario.get("correo")?.value
    let passw = this.formulario.get("passw")?.value

    this.user = new User(null!,null!,null!,correo,null!,passw)
    
    this.userService.login(this.user).subscribe((data:any)=>{
      if(data.error == false){
        this.userService.logueado = true;
        this.userService.user = data.result[0];
        this.router.navigateByUrl("/books")

      }else{
        console.log("No es posible iniciar sesion")
      }
    
    })
  }

}

