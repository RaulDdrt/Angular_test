import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private books: Book[]
  constructor() { 

    this.books = [
      new Book(20, 1, "Dragonlance: El Retorno de los Dragones", "Tapa dura", "M. Weiss y T. Hitman", 20, "https://m.media-amazon.com/images/I/517MG545q8L.jpg"),
      new Book(3, 2, "Uzumaki", "Tapa dura", "Junji Ito", 30, "https://m.media-amazon.com/images/I/81CeGGwz+BL._AC_UF1000,1000_QL80_.jpg"),
      new Book(2, 3, "It", "Tapa blanda", "Stephen King", 20, "https://imagessl3.casadellibro.com/a/l/t5/93/9788497593793.jpg"),
      new Book(38,4,"Berserk","Tapa blanda","Kentaro Miura",15,"https://www.normacomics.com/media/catalog/product/cache/7e7f87b06d106d5c4fb5e6058365ca81/b/e/berserk-maximum-1.jpg")
    ];

  }

  addBook(book: Book):void{

    this.books.push(book)

  }

  getBook():Book[]{
    
    return this.books;

  }

  
  getAll(): Book[] {
    
    return this.books;

  }

  getOne(id_libro: number): Book | undefined {

    return this.books.find(book => book.id_book === id_libro);

  }


  editBook(book: Book): boolean {

    let index = this.books.findIndex(b => b.id_book === book.id_book);

    console.log(index)

    if (index !== -1) {
      this.books[index] = book;
      return true;
    }

    return false;
  }

  deleteThis(id_book: number): boolean {
    const index = this.books.findIndex(book => book.id_book === id_book);
    if (index !== -1) {
      this.books.splice(index, 1);
      return true;
    }
    return false;
  }



}
