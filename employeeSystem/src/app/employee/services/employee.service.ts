import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  addEmployee(employee : any){
    let employees =[];
    if(localStorage.getItem('employee')){
      employees = JSON.parse(localStorage.getItem('employee') || '{}')
      employees = [employee , ...employees]
    }
    else{
      employees = [employee]
    }
    localStorage.setItem('employee' , JSON.stringify(employees))
  }

  getEmployeeData(){
    return JSON.parse(localStorage.getItem('employee')|| '{}')
  }




}
