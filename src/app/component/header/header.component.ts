import { Component } from '@angular/core';
import { UserServiceService } from 'src/app/shared/user-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public userService: UserServiceService){}

}
