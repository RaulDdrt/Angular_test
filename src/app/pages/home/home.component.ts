import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public fotoportada : string;
  constructor(){
    this.fotoportada = "https://freepngimg.com/thumb/book/6-books-png-image-with-transparency-background.png"
  }

}
