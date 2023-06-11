import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent {

  public registrarse: FormGroup;
  
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

  onSubmit(form:FormGroup){
    console.log("Nombre: ", this.registrarse.get("nombre")?.value)
    console.log("apellidos: ", this.registrarse.get("apellidos")?.value)
    console.log("correo: ", this.registrarse.get("correo")?.value)
    console.log("url: ", this.registrarse.get("url")?.value)
    console.log("passw: ", this.registrarse.get("passw")?.value)
    console.log("passw2: ", this.registrarse.get("passw2")?.value)
    
  }

}
