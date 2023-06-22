import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  public libros: Book[]=[];
  public busqueda: string = "";
  public filteredBooks: Book[];

  constructor(public booksService: BooksService){
    this.booksService.getAll().subscribe((data: Book[]) => {
      
      this.libros = data;

    })
  }


filterBooks() {
    if (this.busqueda.trim() === "") {
      this.filteredBooks = this.libros;
    } else {
      let id_libro = Number(this.busqueda);
      if (id_libro) {
        this.booksService.getAll().subscribe((libroEncontrado: Book) => {
          this.filteredBooks = libroEncontrado ? [libroEncontrado] : [];
        });
      } else {
        this.filteredBooks = [];
      }
    }
  }

borrarLibro(libro: number) {
    this.booksService.deleteBook(libro).subscribe(() => {
      this.booksService.getAll().subscribe((data: Book[]) => {
        this.libros = data;
        this.filterBooks();
      });
    });
  }
}
