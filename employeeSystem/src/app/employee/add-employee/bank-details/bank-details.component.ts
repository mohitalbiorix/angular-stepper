import { Component, Input, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.css']
})
export class BankDetailsComponent implements OnInit {

  constructor(
    private employeeSvc : EmployeeService
  ) { }
  @Input('empForm') empForm : any
  @Input() action : any;
  @Input() empId : any
  employeeData : any 
  

  ngOnInit(): void {
    this.employeeData = this.employeeSvc.getEmployeeData();
    if(this.action === 'EDIT'){
      this.setEmployeeBankDetail();
    }
  }

  setEmployeeBankDetail(){
    this.empForm.get('bankDetailForm').get('bankName').setValue(this.employeeData[this.empId].bankDetailForm.bankName)
    this.empForm.get('bankDetailForm').get('accountName').setValue(this.employeeData[this.empId].bankDetailForm.accountName)
    this.empForm.get('bankDetailForm').get('accountNumber').setValue(this.employeeData[this.empId].bankDetailForm.accountNumber)
    this.empForm.get('bankDetailForm').get('aadharCardNumber').setValue(this.employeeData[this.empId].bankDetailForm.aadharCardNumber)
    this.empForm.get('bankDetailForm').get('ifscCode').setValue(this.employeeData[this.empId].bankDetailForm.ifscCode)
    this.empForm.get('bankDetailForm').get('panCardNumber').setValue(this.employeeData[this.empId].bankDetailForm.panCardNumber)
  }

  

  get f() {
    return this.empForm.controls.bankDetailForm.controls;
  }


}
