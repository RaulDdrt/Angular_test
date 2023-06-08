import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

  @Input() book: Book;
  @Input() even: boolean;
  @Output() libro = new EventEmitter<number>();

  borrarLibro(): void {
    this.libro.emit(this.book.id_book);
  }

}
