import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { zip } from 'rxjs';
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

  registerForm = this.fb.group({
      uname :['', [Validators.required,Validators.pattern('[a-zA-Z]*')]],
      accnum :['', [Validators.required,Validators.pattern('[0-9]*')]],
      pswd :['', [Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })
  constructor(private ds:DataService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  register(){
    
    var acno = this.registerForm.value.accnum;
    var password = this.registerForm.value.pswd;
    var name = this.registerForm.value.uname;
    // console.log(this.registerForm);
    
    if(this.registerForm.valid){
      alert("Valid Form")
    var result = this.ds.register(name,acno,password)

    if(result){
      alert("Registration successful");
      this.router.navigateByUrl("");
    }
    else{
      alert("User is already exists,Please Log In")

    }
}
  else{
    alert("Invalid Form")
  }

  
  }

}