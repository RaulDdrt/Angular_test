import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/models/book';
import { HttpClient } from '@angular/common/http';
import { UserServiceService } from 'src/app/shared/user-service.service';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardComponent {

  @Input() book: Book;
  @Output() libro = new EventEmitter<number>();

  constructor(public booksService: BooksService, public userService: UserServiceService, private httpClient: HttpClient) { }

  borrarLibro() {
    const deleteThis = this.booksService.deleteBook(this.book.id_book);
    console.log(deleteThis)
    if (deleteThis) {
      this.libro.emit(this.book.id_book);
    }
  }
  
}