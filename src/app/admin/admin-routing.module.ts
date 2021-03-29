import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbookComponent } from './addbook/addbook.component';
import { AdminComponent } from './admin.component';
//import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
//import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { BooklistComponent } from './booklist/booklist.component';

const routes: Routes = [{ path: '', component: AdminComponent },
//{ path: "admindashboard", component: AdmindashboardComponent },
{ path: "addbook", component: AddbookComponent },
{ path: "booklist", component: BooklistComponent },
  // {path:"",redirectTo:"/booklist",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
