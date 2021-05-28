import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  accountdetails : any= {
    1000: { name: "ajay", acno: 1000, password: "testone", balance: 5000 },
    1001: { name: "vijay", acno: 1001, password: "testtwo", balance: 4000 },
    1002: { name: "ram", acno: 1002, password: "testthree", balance: 6000 },
    1003: { name: "ravi", acno: 1003, password: "testfour", balance: 7000 },
}
  constructor(private router:Router) { }

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
      let details = this.accountdetails 
      if (acno in details) {
          if (pwd == details[acno]["password"]) {
              alert("login success");
              this.router.navigateByUrl("dashboard")
          }
          else {
              alert("incorrect password");
          }
      }
      else {
          alert("invalid accountnumber");

      }

  }
}
