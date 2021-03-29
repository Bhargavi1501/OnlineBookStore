import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private us:UserService,private r:Router) { }

  ngOnInit(): void {
  }

  onSubmit(formRef:any){
    let userObj = formRef.value;
    console.log("Registered user",userObj);

    this.us.createUser(userObj).subscribe(
      res=>{
        if(res["message"] == "user existed"){
          alert("Username is already existed..choose another");
        }
        if(res["message"] == "user created"){
          alert("Registration succesfull");
          //this.us.setCartSize();
          //navigate to login component
          this.r.navigateByUrl("/login");
        }
      },
      err=>{
        console.log("Something went wrong",err);
      }
    )
  }

}
