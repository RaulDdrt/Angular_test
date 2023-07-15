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

  public correo: string
  public contrasena : string
  public user : User
  public formulario: FormGroup
  
  constructor(public userService : UserServiceService, public router : Router){}

  ngOnInit() {
    this.formulario = new FormGroup({
      "correo": new FormControl(null, [Validators.required, Validators.email]),
      "passw": new FormControl(null, Validators.required)
    });
  }

  get f(){
    return this.formulario.controls;
  }
  
  onSubmit() {

    console.log("onSubmit")

    const correo = this.formulario.get("correo")?.value
    const passw = this.formulario.get("passw")?.value

    console.log(correo, passw)
    console.log(this.formulario.controls["correo"])
    this.user = new User(999999999,"","",correo,"",passw);
    
    this.userService.login(this.user).subscribe((data)=>{
      // console.log(data)
      if(data != false){
        this.userService.logueado = true;
        console.log(data[0]);
        this.userService.user = data[0];
        this.router.navigateByUrl("/books")

      }else{
        console.log("No es posible iniciar sesion")
      }
    
    })

  }

}

