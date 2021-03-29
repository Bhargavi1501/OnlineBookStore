import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private r:Router) { }

  ngOnInit(): void {
  }
  onSubmit(formRef){
    let adminObject = formRef.value;
    if(adminObject.username == "admin" && adminObject.password == "admin"){
      alert("Admin Logged in successfully");
      this.r.navigateByUrl("/admin/booklist");
    }
  }
}
