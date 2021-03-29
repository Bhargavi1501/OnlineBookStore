import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private hc:HttpClient) { }

  createBook(bookObj):Observable<any>{
    return this.hc.post("/book/addbook",bookObj);
  }

  getBooks():Observable<any>{
    return this.hc.get("/book/getbooks");
  }
}
