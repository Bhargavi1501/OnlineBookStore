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
  categories = [];
  authors = [];
  newReleases = [];
  publishedYear = [];
  constructor(private bs:BookService) { }

  ngOnInit(): void {
    this.bs.getBooks().subscribe(
      res => {
        this.bookArray = res["message"];
        console.log(this.bookArray);
        for(let i = 0; i < this.bookArray.length; i++){
          this.categories.push(this.bookArray[i].category);
          this.authors.push(this.bookArray[i].author);
          this.publishedYear.push(this.bookArray[i].publishedYear);
          if(this.bookArray[i].publishedYear == 2020 || this.bookArray[i].publishedYear == 2021){
            this.newReleases.push(this.bookArray[i]);
          }
        }
        this.categories = this.categories.filter((item,pos)=>pos == this.categories.indexOf(item));
        console.log("categories",this.categories);
        this.authors = this.authors.filter((item,pos)=>pos == this.authors.indexOf(item));
        console.log("Authors",this.authors);
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
