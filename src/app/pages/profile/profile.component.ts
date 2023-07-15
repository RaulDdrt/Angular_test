import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserServiceService } from 'src/app/shared/user-service.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  public fotoperfil : string;
  public user : User;
  constructor(public userService : UserServiceService){
    this.fotoperfil = "https://assets.stickpng.com/images/5845ca511046ab543d25238a.png"
    this.user = this.userService.user

  }

  public editar(newnombre:string,newapellido:string,newemail:string,newfoto:string){

    this.user.name = newnombre;
    this.user.last_name = newapellido;
    this.user.email = newemail;
    this.user.photo = newfoto

     this.userService.edit(this.user).subscribe(
      response => {
        console.log("Perfil actualizado exitosamente");
      },
      error => {
        console.error("Error al actualizar el perfil:", error);
      }
    );
  }
}
