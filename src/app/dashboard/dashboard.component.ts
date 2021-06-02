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

    alert("clicked");
    var acno = this.acno;
    var pswd = this.pswd;
    var amount = this.amount;


    const result = this.dataService.deposit(acno,pswd,amount)

    if(result){
    alert("amount" + amount + "credited successfully and new balance is : "+ result);
    }
  }

  withdraw(){
    alert("amount debited successfully")
  }


}
