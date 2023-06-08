import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  public libros: Book[];
  public busqueda: string = "";
  public filteredBooks: Book[];

  constructor(public bookService: BooksService) {
    this.libros = this.bookService.getAll();
    this.filteredBooks = this.libros;
  }

  filterBooks() {
    if (this.busqueda.trim() === "") {
      this.filteredBooks = this.libros;
    } else {
      let id_libro = Number(this.busqueda);
      let libroEncontrado = id_libro ? this.bookService.getOne(id_libro) : undefined;
      this.filteredBooks = libroEncontrado ? [libroEncontrado] : [];
    }
  }

  borrarLibro(libro: number) {
    let deleted = this.bookService.deleteThis(libro);
    if (deleted) {
      this.libros = this.bookService.getAll();
      this.filterBooks();
    }
  }
}
