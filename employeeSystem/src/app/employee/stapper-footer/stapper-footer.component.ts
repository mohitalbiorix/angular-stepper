import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-stapper-footer',
  templateUrl: './stapper-footer.component.html',
  styleUrls: ['./stapper-footer.component.css']
})
export class StapperFooterComponent implements OnInit {

  constructor(
    private router : Router,
    private employeeSvc : EmployeeService
  ) { }

  @Input() stepperName : any
  @Input() empForm : any

  ngOnInit(): void {
  }


  onBackClick(){
    this.router.navigate(['/employee/employee-list'])
  }

  addNewEmployee(){
    if(this.empForm.status != 'INVALID'){
      const employeeFormValue = this.empForm.value
      this.employeeSvc.addEmployee(employeeFormValue)
    }
  }

}
