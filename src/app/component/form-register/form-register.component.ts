import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserServiceService } from 'src/app/shared/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent {

  public registrarse: FormGroup;
  public user: User;

  constructor(public userService:UserServiceService, public router: Router){}
  
  ngOnInit(){
    this.registrarse = new FormGroup({
      "nombre":new FormControl(null,Validators.required),
      "apellidos":new FormControl(null,Validators.required),
      "correo":new FormControl(null,[Validators.required,Validators.email]),
      "url":new FormControl(null,Validators.required),
      "passw":new FormControl(null,Validators.required),
      "passw2":new FormControl(null,Validators.required)

    });

  }

  // onSubmit(form:FormGroup){
  //   console.log("Nombre: ", this.registrarse.get("nombre")?.value)
  //   console.log("apellidos: ", this.registrarse.get("apellidos")?.value)
  //   console.log("correo: ", this.registrarse.get("correo")?.value)
  //   console.log("url: ", this.registrarse.get("url")?.value)
  //   console.log("passw: ", this.registrarse.get("passw")?.value)
  //   console.log("passw2: ", this.registrarse.get("passw2")?.value)
    
  // }

  onSubmit(){
    let nombre = this.registrarse.get("nombre")?.value
    let apellidos = this.registrarse.get("apellidos")?.value
    let correo = this.registrarse.get("correo")?.value
    let passw = this.registrarse.get("passw")?.value
    let passw2 = this.registrarse.get("passw2")?.value

    this.user = new User(0,nombre,apellidos,correo,".",passw)
    if(passw === passw2){
      this.userService.register(this.user).subscribe((data:any)=>{
        console.log(data)
        
      })
    }else{
      console.log("Las contraseñas deben ser iguales")
    }

    this.router.navigateByUrl("/login")
  }

}
