import { Injectable } from '@angular/core';
import { ArgumentOutOfRangeError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  accountdetails : any= {
    1000: { name: "ajay", acno: 1000, password: "testone", balance: 5000 },
    1001: { name: "vijay", acno: 1001, password: "testtwo", balance: 4000 },
    1002: { name: "ram", acno: 1002, password: "testthree", balance: 6000 },
    1003: { name: "ravi", acno: 1003, password: "testfour", balance: 7000 },
}

  constructor() { }

  register(name:any,acno:any,password:any){

    let details = this.accountdetails
    if (acno in details) {
        return false;
    }
    else {
      details[acno]={
        name,acno,password,balance:0
      }
      return true;
    }

  }

  login(acno:any,pwd:any){

    let details = this.accountdetails
    if (acno in details) {
        if (pwd == details[acno]["password"]) {
            return true;
        }
        else {
            alert("incorrect password");
            return false;
        }
    }
    else {
        alert("invalid accountnumber");
        return false;

    }



  }


  deposit(accno:any,pswd:any,amt:any){

    var amount= parseInt(amt)
    let dataset = this.accountdetails;

    if (accno in dataset) {
      if (pswd == dataset[accno]["password"]) {

        dataset[accno]["balance"] += amount;
          return dataset[accno]["balance"];
      }
      else{
        alert("Incorrect Password");
        return false;
      }
    }
    else{
      alert("Invalid Account")
      return false;
    }
  }


  withdraw(wacno:any,wpswd:any,amnt:any){

    var amount1 = parseInt(amnt)
    let dataset1 = this.accountdetails;

    if(wacno in dataset1) {
      if(wpswd == dataset1[wacno]["password"]){
        if(dataset1[wacno]["balance"]>amount1){

        dataset1[wacno]["balance"] -= amount1;
        return dataset1[wacno]["balance"];
        }
        else{
          alert("Insufficient Balance");
          return false
        }
      }
      else{
        alert("Incorrect Password");
        return false;
      }
    }
    else{
      alert("Invalid Account");
      return false;
    }

  }

}
