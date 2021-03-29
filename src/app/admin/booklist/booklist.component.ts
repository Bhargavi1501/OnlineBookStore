import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/book.service';
@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  bookArray = [];
  p;
  constructor(private bs:BookService,private r:Router) { }

  ngOnInit(): void {
    
    this.bs.getBooks().subscribe(
      res => {
        this.bookArray = res["message"];
        console.log(this.bookArray);
      },
      err => {
        alert("Something went wrong!");
        console.log(err);
      }
    )
  }
logout(){

}
addbook(){
  this.r.navigateByUrl("/admin/addbook");
}
booklist(){
  this.r.navigateByUrl("/admin/booklist");
}

}
