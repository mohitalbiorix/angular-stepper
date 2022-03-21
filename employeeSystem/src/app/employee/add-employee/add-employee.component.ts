import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(
    private formBuilder : FormBuilder,
    private activatedRoute : ActivatedRoute,
  ) { }

  employeeForm!: FormGroup
  action : any
  empId : any
  queryParamsData : any
 
  ngOnInit(): void {
    this.initForm();
    this.getQueryParams();
    console.log(this.employeeForm.controls['bankDetailForm']);
    console.log(this.employeeForm.controls['educationDetailForm'].status ,'employeeForm');
  }

  initForm(){
    this.employeeForm = this.formBuilder.group({
      personalDetailForm: this.formBuilder.group({
        firstName: ['', Validators.required],
        middleName : ['', Validators.required],
        lastName: ['', Validators.required],
        birthDate: ['', Validators.required],
        mobileNumber: ['',  Validators.compose([ Validators.required , Validators.minLength(10) , Validators.maxLength(10)])],
        contactNumber: ['', Validators.compose([Validators.required  , Validators.minLength(10) , Validators.maxLength(10)])],
        email: ['',Validators.compose([ Validators.required,Validators.email])],
        image: [''],
        presentAddress : [null, Validators.required],
        permanentAddress : [null , Validators.required],
        checkAddress : [false]

      }),
      bankDetailForm: this.formBuilder.group({
        bankName: ['', Validators.required],
        accountName : ['', Validators.required],
        accountNumber: ['', Validators.required],
        ifscCode: ['', Validators.required],
        aadharCardNumber: ['', Validators.required],
        panCardNumber: ['', Validators.required],
      }),
      professionalDetailForm: this.formBuilder.group({
        designation: ['', Validators.required],
        department : ['', Validators.required],
        experienceInYear: ['', Validators.required],
        experienceInMonth: ['', Validators.required],
        currentLocation: ['', Validators.required],
        skills: ['', Validators.required],
        resume: [''],
      }),
      educationDetailForm : this.formBuilder.group({
        educationDetail : this.formBuilder.array([])
      }),
      experienceDetailForm : this.formBuilder.group({
        experienceDetail : this.formBuilder.array([])
      }),
      currentOrganizationDetailForm: this.formBuilder.group({
        joiningDate: ['', Validators.required],
        appraisalDate : ['', Validators.required],
        currentCTC : ['', Validators.required]
      })

      

    })
  }

 

  getQueryParams(){
    this.activatedRoute.queryParams.subscribe(
      query=>{
        this.queryParamsData = query;
        this.action = this.queryParamsData.action;
        this.empId = this.queryParamsData.empId
      }
    )
  }


 get educationDetail(): FormArray {
    return this.employeeForm.get('educationDetailForm')?.get('educationDetail') as FormArray
  }

  get experienceDetail() : FormArray {
    return this.employeeForm.get('experienceDetailForm')?.get('experienceDetail') as FormArray
  }

  newEducationDetail(): FormGroup {
    return this.formBuilder.group({
      educationName : ['', Validators.required],
      university: ['' , Validators.required],
      result : ['', Validators.required],
      passedOn: ['',Validators.required],
    })
  }

  addEducationDetail() {
    this.educationDetail.push(this.newEducationDetail());
  }

  removeEducationDetail(i: number) {
    this.educationDetail.removeAt(i);
  }

  newExperienceDetail() : FormGroup{
    return this.formBuilder.group({
      companyName : ['', Validators.required],
      position: ['' , Validators.required],
      totalYear : ['', Validators.required],
      lastCTC: ['',Validators.required],
    })
  }

  addExperienceDetail() {
    this.experienceDetail.push(this.newExperienceDetail());
  }

  removeExperienceDetail(i: number) {
    this.experienceDetail.removeAt(i);
  }



}
