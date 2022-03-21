import { Component, Input, OnInit, Output , EventEmitter } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';


@Component({
  selector: 'app-education-detail',
  templateUrl: './education-detail.component.html',
  styleUrls: ['./education-detail.component.css']
})
export class EducationDetailComponent implements OnInit {

  constructor(
    private employeeSvc : EmployeeService
  ) { }

  @Input() empForm : any 
  @Output('addEducationDetail') addEducationDetail = new EventEmitter();
  @Output("removeEducationDetail") removeEducationDetail = new EventEmitter();
  isButtonDisable = false;
  readOnly = false;
  @Input() action : any;
  @Input() empId : any
  employeeData : any

  ngOnInit(): void {
    this.employeeData = this.employeeSvc.getEmployeeData();
    if(this.action === 'EDIT'){
      this.setEducationDetails();
    }
  }


  get f() {
    return this.empForm.controls.educationDetailForm.controls.educationDetail;
  }

  addEducation(){
    this.addEducationDetail.emit();
    this.isButtonDisable = true;
    this.empForm.controls.experienceDetailForm.controls.experienceDetail.getRawValue();
  }


  setEducationDetails(){
   
  }


  submitEducationDetail(i : any){
    this.isButtonDisable = false;
    this.setReadOnly(i)
  }

  setReadOnly(index : any){
    //((this.empForm.get('educationDetailForm').get('educationDetail').controls as FormArray).at(index) as FormGroup).disable();
    this.readOnly = true;
  }

  setEnableForm(index : any){
    //((this.empForm.get('educationDetailForm').get('educationDetail').controls as FormArray).at(index) as FormGroup).enable();
    this.readOnly = false;
  }

  editEducationDetail(i : any){
    this.isButtonDisable = false;
    this.setEnableForm(i)
    
  }

  deleteEducationDetail(index : number){
    this.isButtonDisable = false;
    this.removeEducationDetail.emit();
    //this.empForm.get('educationDetailForm').get('educationDetail').disable();
  }


}
