import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private apiUrl = 'http://localhost:3000/books'; 

  constructor(private http: HttpClient) { }

getAll(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

getOneBook(id_book:number): Observable<any>{
    return this.http.get(this.apiUrl + "?id=" + id_book)
  }

postBook(book: Book): Observable<Object> {
    return this.http.post(this.apiUrl, book);
  }

editBook(book: Book): Observable<any> {
    return this.http.put(this.apiUrl, book);
  }


deleteBook(id_book:number):Observable<Object>{
  return this.http.request('delete', this.apiUrl, {body:{id_book:id_book}});
}
  
}