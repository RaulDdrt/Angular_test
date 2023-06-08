import { Component, OnInit, importProvidersFrom } from '@angular/core';
import { User } from 'src/app/models/user';
import { NgForm } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})



export class FormLoginComponent implements OnInit{

  public user: User 
  
  constructor(){

    this.user = new User(0,"pedro","diaz","asd@sdas.com","asfasf","adfsf")

  }

  onSubmit(form:NgForm) {
    console.log(form.value)
    console.log(this.user)
  }

  ngOnInit(): void {
    
  }

}


// https://stackoverflow.com/questions/60914969/angular-9-cant-bind-to-formgroup-since-it-isnt-a-known-property-of-form


// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa