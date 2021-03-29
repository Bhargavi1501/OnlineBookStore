import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';

import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [CategoriesComponent, HomeComponent],
  imports: [
    CommonModule,
    NgxPaginationModule
  ]
})
export class HomeModule { }
