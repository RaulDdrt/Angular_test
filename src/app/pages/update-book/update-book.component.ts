import { Component, OnInit } from '@angular/core';
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
    
    this.bookService.getAll()

  }

  // updateBook(): void {
  //   let success = this.bookService.editBook(this.book);
  //   if (success) {
  //     console.log("Todo bien");
  //   } else {
  //     console.log("Todo mal");
  //   }
  // }


updateBook(title:string,type:string,author:string,price:number,photo:string,id:number,id2:number){

  const newBook = {
    title,
    type,
    author,
    price,
    photo,
    id_book: id,
    id_user: id2
  }

  this.bookService.editBook(newBook);

  this.route.navigateByUrl("/books")


}

}
