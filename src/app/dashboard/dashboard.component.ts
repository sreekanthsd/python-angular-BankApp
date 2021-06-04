import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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

  depositForm = this.fb.group({
    acno :['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd :['', [Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    amount :['', [Validators.required,Validators.pattern('[0-9]*')]]
  })

  withdrawForm = this.fb.group({
    wacno :['',[Validators.required,Validators.pattern('[0-9]*')]],
    wpswd :['', [Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    wamount :['', [Validators.required,Validators.pattern('[0-9]*')]]
  })

  constructor(private dataService:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  deposit(){

    var acno = this.depositForm.value.acno;
    var pswd = this.depositForm.value.pswd;
    var amount = this.depositForm.value.amount;

    if(this.depositForm.valid){
      alert("Valid Form")
      const result = this.dataService.deposit(acno,pswd,amount)

    if(result){
    alert("amount " + amount + " is credited successfully and new balance is : "+ result);
    }
  }
  else{
    alert("invalid Form")
  }
}

  withdraw(){
 
    var wacno = this.withdrawForm.value.wacno;
    var wpswd = this.withdrawForm.value.wpswd;
    var wamount = this.withdrawForm.value.wamount;

    if(this.withdrawForm.valid){
      alert("Valid Form");
    const result1 = this.dataService.withdraw(wacno,wpswd,wamount)

    if(result1){
    alert("amount " + wamount + " is debited successfully and new balance is: " + result1);
    }
  }
  else{
    alert("Invalid Form");
  }
  }

}
