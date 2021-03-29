import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';

import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [CategoriesComponent, HomeComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class HomeModule { }
