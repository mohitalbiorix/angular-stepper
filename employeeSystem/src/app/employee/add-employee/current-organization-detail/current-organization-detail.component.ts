import { Component, Input, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-current-organization-detail',
  templateUrl: './current-organization-detail.component.html',
  styleUrls: ['./current-organization-detail.component.css']
})
export class CurrentOrganizationDetailComponent implements OnInit {

  constructor(
    private employeeSvc : EmployeeService
  ) { }

  @Input() empForm : any 
  @Input() action : any
  @Input() empId : any
  employeeData : any

  ngOnInit(): void {
    this.employeeData = this.employeeSvc.getEmployeeData();
    if(this.action ==='EDIT'){
      this.setCurrentOrganizationDetail();
    }
  }

  setCurrentOrganizationDetail(){
    this.empForm.get('currentOrganizationDetailForm').get('joiningDate').setValue(this.employeeData[this.empId].currentOrganizationDetailForm.joiningDate)
    this.empForm.get('currentOrganizationDetailForm').get('appraisalDate').setValue(this.employeeData[this.empId].currentOrganizationDetailForm.appraisalDate)
    this.empForm.get('currentOrganizationDetailForm').get('currentCTC').setValue(this.employeeData[this.empId].currentOrganizationDetailForm.currentCTC)
 
  }

  get f() {
    return this.empForm.controls.currentOrganizationDetailForm.controls;
  }

}
