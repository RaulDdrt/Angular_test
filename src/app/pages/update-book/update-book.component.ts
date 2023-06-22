import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {

  public books: Book[];

  constructor(
    public route: Router,
    public bookService: BooksService
  ) {
    this.bookService.getAll().subscribe((data: Book[]) => {
      this.books = data;
    });
  }

updateBook(title: string, type: string, author: string, price: number, photo: string, id: number, id2: number) {
    const newBook = {
      title,
      type,
      author,
      price,
      photo,
      id_book: id,
      id_user: id2
    };

    this.bookService.editBook(newBook).subscribe(() => {
      this.route.navigateByUrl("/books");
      alert("Todo bien");
    });
  }
}
