import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { UserServiceService } from 'src/app/shared/user-service.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})

export class UpdateBookComponent {

  public books: Book[];

  constructor(
    public route: Router,
    public bookService: BooksService,
    public userService: UserServiceService
  ) {
    this.bookService.getAll(this.userService.user.id_user).subscribe((data: Book[]) => {
      this.books = data;
    });
  }

  updateBook(title: string, type: string, author: string, price: number, photo: string, id: number) {
    const newBook: Book = {
      title,
      type,
      author,
      price,
      photo,
      id_book: id,
      id_user: this.userService.user.id_user
    };

    this.bookService.editBook(newBook).subscribe(() => {
      this.route.navigateByUrl("/books");
      alert("Libro editado correctamente");
    });
  }
}
