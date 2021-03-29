import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  constructor(private r: Router) { }

  ngOnInit(): void {
  }

  addbook() {
    this.r.navigateByUrl("/admin/addbook");
  }

  booklist() {
    this.r.navigateByUrl("/admin/booklist");
  }

  logout() {

  }
  
}
