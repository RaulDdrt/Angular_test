import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private url:string = 'http://localhost:3000'; 
  public logueado:boolean;
  public user:User

  constructor(private http: HttpClient) { 

    this.logueado = false
  }

  register(user:User):Observable<any>{

    return this.http.post(this.url + "/register", user)

  }

  login(user:User):Observable<any>{

    return this.http.post(this.url + "/login", user)

  }

}
