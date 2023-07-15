import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { UserServiceService } from 'src/app/shared/user-service.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  public libros: Book[]=[];
  public busqueda: string = "";
  public filteredBooks: Book[];

  constructor(public booksService: BooksService, public userService: UserServiceService) {
    if (this.userService.user) {
      this.booksService.getBookByUser(this.userService.user.id_user).subscribe((data: Book[]) => {
        this.libros = data;
      });
    }
  }
  


// filterBooks() {
//     if (this.busqueda.trim() === "") {
//       this.filteredBooks = this.libros;
//     } else {
//       let id_libro = Number(this.busqueda);
//       if (id_libro) {
//         this.booksService.getBookByUser().subscribe((libroEncontrado: Book) => {
//           this.filteredBooks = libroEncontrado ? [libroEncontrado] : [];
//         });
//       } else {
//         this.filteredBooks = [];
//       }
//     }
// }

filterBooks() {
  if (this.busqueda.trim() === "") {
    this.filteredBooks = this.libros;
  } else {
    let id_user: number = Number(this.busqueda);
    if (!isNaN(id_user)) {
      this.booksService.getBookByUser(id_user).subscribe(
        (libroEncontrado: Book[]) => {
          this.filteredBooks = libroEncontrado ? libroEncontrado : [];
        },
        (error) => {
          console.error("Error al buscar el libro:", error);
          this.filteredBooks = [];
        }
      );
    } else {
      this.filteredBooks = [];
    }
  }
}


borrarLibro(id_book: number) {
  this.booksService.deleteBook(id_book).subscribe(() => {
    this.booksService.getBookByUser(this.userService.user.id_user).subscribe((data: Book[]) => {
      this.libros = data;
      this.filterBooks();
    });
  });
}
}
