import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { UserServiceService } from 'src/app/shared/user-service.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent {

public books : Book[]
title: any;
type: any;
author: any;
price: any;
photo: any;
public formulario: FormGroup;

constructor(public booksService : BooksService, public userService : UserServiceService, public router: Router){{
    this.booksService.getAll(this.userService.user.id_user).subscribe((data: Book[]) => {
      this.books = data;
      console.log(data)
    });
  }}

  ngOnInit() {
    this.formulario = new FormGroup({
      "title": new FormControl(null, Validators.required),
      "type": new FormControl(null, Validators.required),
      "author": new FormControl(null, Validators.required),
      "price": new FormControl(null, Validators.required),
      "photo": new FormControl(null, Validators.required),

    });
  }

get f(){
    return this.formulario.controls;
}
  
nuevoLibro(title: string, type: string, author: string, price: number, photo: string) {
    
    let newBook: Book = {
      title: this.formulario.value.title,
      type: this.formulario.value.type,
      author: this.formulario.value.author,
      price: this.formulario.value.price,
      photo: this.formulario.value.photo,
      id_book: 0,
      id_user: this.userService.user.id_user,
    };
  
    this.booksService.postBook(newBook).subscribe(() => {
      console.log(newBook);
      this.router.navigateByUrl("/books");
      alert("Libro creado");
    });
  }
}
