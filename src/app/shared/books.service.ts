import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private apiUrl = 'http://localhost:3000/books'; 

  constructor(private http: HttpClient) { }

  getAll(id_user: number): Observable<any> {
    return this.http.get(`${this.apiUrl}?id_user=${id_user}`);
  }
  

getBookByUser(id_book: number): Observable<any> {
  const params = new HttpParams().set('id_user', id_book.toString());
  return this.http.get(this.apiUrl, { params });
}


postBook(book: Book): Observable<any> {
    // alert(this.apiUrl);
    return this.http.post(this.apiUrl, book);
}

editBook(book: Book): Observable<any> {
    return this.http.put(this.apiUrl, book);
}


deleteBook(id_book: number): Observable<any> {
  const params = new HttpParams().set('id_book', id_book.toString());
  return this.http.delete(this.apiUrl, { params });
}

  
}