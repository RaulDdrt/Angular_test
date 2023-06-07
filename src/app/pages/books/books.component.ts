import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  public books: Book[];

  constructor() {
    this.books = [
      new Book(20, 1, "Dragonlance: El Retorno de los Dragones", "Tapa dura", "M. Weiss y T. Hitman", 20, "https://m.media-amazon.com/images/I/517MG545q8L.jpg"),
      new Book(2, 2, "Uzumaki", "Tapa dura", "Junji Ito", 30, "https://m.media-amazon.com/images/I/81CeGGwz+BL._AC_UF1000,1000_QL80_.jpg"),
      new Book(2, 2, "It", "Tapa blanda", "Stephen King", 20, "https://imagessl3.casadellibro.com/a/l/t5/93/9788497593793.jpg"),
    ];
  }

  
  nuevoLibro(title: string, type: string, author: string, price: string, photo: string, id: string, id2: string) {

    const nuevoLibro = new Book(parseInt(id), parseInt(id2), title, type, author, parseFloat(price), photo);
    this.books.push(nuevoLibro);

  }

}