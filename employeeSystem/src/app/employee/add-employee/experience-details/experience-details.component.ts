import { Component, OnInit , EventEmitter, Output, Input} from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-experience-details',
  templateUrl: './experience-details.component.html',
  styleUrls: ['./experience-details.component.css']
})
export class ExperienceDetailsComponent implements OnInit {

  constructor(
    private employeeSvc : EmployeeService,
    private formBuilder : FormBuilder,
  ) { }
  @Input('empForm') empForm : any
  @Output('addExperienceDetail') addExperienceDetail = new EventEmitter();
  @Output("removeExperienceDetail") removeExperienceDetail = new EventEmitter();
  isButtonDisable = false;
  readOnly = false;
  employeeData : any;
  @Input() action : any;

  ngOnInit(): void {
    this.employeeData = this.employeeSvc.getEmployeeData();
    if(this.action === 'EDIT'){
      this.setExperienceDetails();
    }
  }


  addExperience(){
    this.addExperienceDetail.emit();
  }

  get f() {
    return this.empForm.controls.experienceDetailForm.controls.experienceDetail;
  }

  

  submitExperienceDetail(i : any){
    this.isButtonDisable = false;
    this.setDisableForm(i)
  }

  get experienceDetail() : FormArray {
    return this.empForm.get('experienceDetailForm')?.get('experienceDetail') as FormArray
  }


  setExperienceDetails(){
   const experienceData = this.employeeData[0].experienceDetailForm.experienceDetail;
   for(let index =0;index < experienceData.length ;index++){
    this.experienceDetail.push(
      this.formBuilder.group({
        companyName : [experienceData[index].companyName],
        lastCTC: [experienceData[index].lastCTC],
        position : [experienceData[index].position],
        totalYear: [experienceData[index].totalYear],
      })
    )
  }
  }

  setDisableForm(index : any){
    //((this.empForm.get('experienceDetailForm').get('experienceDetail').controls as FormArray).at(index) as FormGroup).disable();
    this.readOnly = true;
  }

  setEnableForm(index : any){
    //((this.empForm.get('experienceDetailForm').get('experienceDetail').controls as FormArray).at(index) as FormGroup).enable();
    this.readOnly = false;
  }

  editExperienceDetail(i : any){
    this.isButtonDisable = false;
    this.setEnableForm(i)
    
  }

  deleteExperienceDetail(){
    this.removeExperienceDetail.emit();
    this.isButtonDisable = false;
    this.empForm.get('experienceDetailForm').get('experienceDetail').disable();
  }


}
