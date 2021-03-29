import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/book.service';
@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  file: File;
  incomingfile(event) {
    this.file = event.target.files[0];
  }
  constructor(private bs: BookService, private r: Router) { }

  ngOnInit(): void {
  }
  onSubmit(formRef: any) {
    let bookObj = formRef.value;
    console.log(bookObj);
    let formData = new FormData();
    //adding image and other data to ForData object
    formData.append('photo', this.file, this.file.name);

    formData.append("bookObj", JSON.stringify(bookObj))
    //append() can only take the data in string format so convert the file datawhich is in binary to string


    this.bs.createBook(formData).subscribe(
      res => {
        if (res["message"] == "book existed") {
          alert("Book is already existed..");
        }
        if (res["message"] == "book created") {
          alert("Book added successfully");

          //clear form after adding object
          formRef.reset();

        }
      },
      err => {
        alert("Something went wrong in user creation");
        console.log(err);
      }
    )
  }
  booklist(){
    this.r.navigateByUrl("/admin/booklist");
  }
}
