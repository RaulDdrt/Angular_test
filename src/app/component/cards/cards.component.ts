import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardComponent {

  @Input() book: Book;
  @Output() libro = new EventEmitter<number>();

  constructor(private booksService: BooksService) { }

  borrarLibro() {
    const deleted = this.booksService.deleteThis(this.book.id_book);
    if (deleted) {
      this.libro.emit(this.book.id_book);
    }
  }
  
}