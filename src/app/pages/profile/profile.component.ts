import { Component } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  public fotoperfil : string;
  public user : User;
  constructor(){
    this.fotoperfil = "https://assets.stickpng.com/images/5845ca511046ab543d25238a.png"
    this.user = new User(1,"Pedro","Diaz","pedro@gmail.com","","sss")

  }

  public editar(newnombre:string,newapellido:string,newemail:string,newfoto:string){

    this.user.name = newnombre;
    this.user.last_name = newapellido;
    this.user.email = newemail;
    this.user.photo = newfoto
      
  }


}
