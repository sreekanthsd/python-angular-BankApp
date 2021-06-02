import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  acno="";
  pswd="";
  amount="";

  wacno="";
  wpswd="";
  wamount="";

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }

  deposit(){

    var acno = this.acno;
    var pswd = this.pswd;
    var amount = this.amount;


    const result = this.dataService.deposit(acno,pswd,amount)

    if(result){
    alert("amount " + amount + " is credited successfully and new balance is : "+ result);
    }
  }

  withdraw(){
 
    var wacno = this.wacno;
    var wpswd = this.wpswd;
    var wamount = this.wamount;


    const result1 = this.dataService.withdraw(wacno,wpswd,wamount)

    if(result1){
    alert("amount " + wamount + " is debited successfully and new balance is: " + result1);
    }
  }


}
