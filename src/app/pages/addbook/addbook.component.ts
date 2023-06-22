import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent {

  constructor(private booksService : BooksService){}
  
nuevoLibro(title: string, type: string, author: string, price: number, photo: string, id: number, id2: number) {
    
    let newBook: Book = {
      title,
      type,
      author,
      price,
      photo,
      id_book: id,
      id_user: id2
    };
  
    this.booksService.postBook(newBook).subscribe(() => {
    });
  }
}
