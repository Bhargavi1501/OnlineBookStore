import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private us: UserService,private r: Router) { }

  ngOnInit(): void {
  }
  onSubmit(formRef) {

    let userCredObj = formRef.value;
    console.log(userCredObj);
  
      this.us.loginUser(userCredObj).subscribe(
        res => {
          if (res["message"] == "success") {
            //store tiken and username in browser's localstorage
            localStorage.setItem("token", res["signedToken"]);
            localStorage.setItem("username", res["username"]);
            alert("Successfully Logged in!");
            //navigate to userdashboard
            this.r.navigateByUrl("/userdashboard");
            
          }
          else {
            alert(res["message"])
          }
        },
        err => {
          console.log("Something went wrong", err);
        }
      )
      }
  register(){
    this.r.navigateByUrl("/register");
  }

  forgetPassword(){

  }
}
