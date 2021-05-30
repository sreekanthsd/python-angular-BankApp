import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  accnum="Enter Your Account Number"
  pswd=""
  uname=""
  aim="Registration Page"
  constructor(private ds:DataService,private router:Router) { }

  ngOnInit(): void {
  }

  register(){
    

    var acno = this.accnum;
    var password = this.pswd;
    var name = this.uname;
    
    var result = this.ds.register(name,acno,password)

    if(result){
      alert("Registration successful");
      this.router.navigateByUrl("");
    }
    else{
      alert("User is already exists,Please Log In")

    }

  }

}