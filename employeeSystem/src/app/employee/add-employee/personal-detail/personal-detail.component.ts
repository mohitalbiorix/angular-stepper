import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-personal-detail',
  templateUrl: './personal-detail.component.html',
  styleUrls: ['./personal-detail.component.css']
})
export class PersonalDetailComponent implements OnInit {

  constructor(
    private employeeSvc : EmployeeService) { }

  personalDetailForm : any
  @Input('empForm') empForm : any
  @Input() action : any;
  public imagePath: any;
  imgURL: any;
  @Input() empId : any
  employeeData : any



  ngOnInit(): void {
    this.employeeData = this.employeeSvc.getEmployeeData();
    console.log(this.employeeData);
    if(this.action === 'EDIT'){
      this.setEmployeePersonalDetail();
    }
  }

  setEmployeePersonalDetail(){
    this.empForm.get('personalDetailForm').get('firstName').setValue(this.employeeData[this.empId].personalDetailForm.firstName)
    this.empForm.get('personalDetailForm').get('middleName').setValue(this.employeeData[this.empId].personalDetailForm.middleName)
    this.empForm.get('personalDetailForm').get('lastName').setValue(this.employeeData[this.empId].personalDetailForm.lastName)
    this.empForm.get('personalDetailForm').get('email').setValue(this.employeeData[this.empId].personalDetailForm.email)
    this.empForm.get('personalDetailForm').get('mobileNumber').setValue(this.employeeData[this.empId].personalDetailForm.mobileNumber)
    this.empForm.get('personalDetailForm').get('contactNumber').setValue(this.employeeData[this.empId].personalDetailForm.contactNumber)
    this.empForm.get('personalDetailForm').get('birthDate').setValue(this.employeeData[this.empId].personalDetailForm.birthDate)
    this.empForm.get('personalDetailForm').get('presentAddress').setValue(this.employeeData[this.empId].personalDetailForm.presentAddress)
    this.empForm.get('personalDetailForm').get('permanentAddress').setValue(this.employeeData[this.empId].personalDetailForm.permanentAddress)
    this.empForm.get('personalDetailForm').get('checkAddress').setValue(this.employeeData[this.empId].personalDetailForm.checkAddress)
    // this.empForm.get('personalDetailForm').get('image').setValue(this.employeeData[0].personalDetailForm.image)
  }

  get f() {
    return this.empForm.controls.personalDetailForm.controls;
  }

  preview(imageInput: any) {

    if(imageInput.files[0]){
      const file = imageInput.files[0];
      var pattern = /image-*/;
      
      if (!file.type.match(pattern)) {
        return;
      }
    }

    var reader = new FileReader();
    this.imagePath = imageInput;
    reader.readAsDataURL(imageInput[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
    
  }

  checkAddress(value : any){
    if(value === true){
       this.empForm.get('personalDetailForm').get('permanentAddress').setValue(this.empForm.value.personalDetailForm.presentAddress)
        console.log(this.empForm.value.personalDetailForm.presentAddress)
    }
    else{
      this.empForm.get('personalDetailForm').get('permanentAddress').setValue('')
    }
  }

}
