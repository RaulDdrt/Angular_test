import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  public books : Book[];

  constructor(){
    this.books = [

      new Book (0,0,"Cronicas de la Dragonlance: El Retorno de los Dragones","Tapa dura","M. Weiss y T. Hitman",20,"https://m.media-amazon.com/images/I/71oD0ziA11L.jpg"),
      new Book (0,0, "Uzumaki","Tapa dura","Junji Ito",30,"https://m.media-amazon.com/images/I/81CeGGwz+BL._AC_UF1000,1000_QL80_.jpg"),
      new Book (0,0,"It","Tapa blanda","Stephen King",20,"https://imagessl3.casadellibro.com/a/l/t5/93/9788497593793.jpg")
    ]
  }

}


