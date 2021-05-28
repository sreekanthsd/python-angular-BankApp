import { Injectable } from '@angular/core';

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
}
