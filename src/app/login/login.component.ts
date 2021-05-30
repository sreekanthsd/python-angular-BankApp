import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim="Your perfect banking partner";
  accountNumber="Account Number Please";
  accnum="";
  pswd="";

  constructor(private router:Router,private ds:DataService) { }

  ngOnInit(): void {
  }

  accnoChange(event:any){
    this.accnum=event.target.value;
    console.log(this.accnum);
  }

  pwdChange(event:any){
    this.pswd=event.target.value;
    console.log(this.pswd);
  }
  
  login(){
      let acno = this.accnum
      let pwd = this.pswd
      const result = this.ds.login(acno,pwd)
      if(result){
        alert("login success");
        this.router.navigateByUrl("dashboard")
      }
      else{
        
      }

  }

  register(){
    this.router.navigateByUrl("register")
  }
}
