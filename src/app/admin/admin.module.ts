import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
//import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AddbookComponent } from './addbook/addbook.component';
import { BooklistComponent } from './booklist/booklist.component';

import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  declarations: [AdminComponent, AdmindashboardComponent, AddbookComponent, BooklistComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class AdminModule { }
