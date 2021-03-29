import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bookArray = [];
  p;
  constructor(private bs:BookService) { }

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

  viewBook(){

  }
  addToCart(){

  }
  wishList(){
    
  }

}
