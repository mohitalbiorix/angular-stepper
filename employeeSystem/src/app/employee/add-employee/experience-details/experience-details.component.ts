import { Component, OnInit , EventEmitter, Output, Input} from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-experience-details',
  templateUrl: './experience-details.component.html',
  styleUrls: ['./experience-details.component.css']
})
export class ExperienceDetailsComponent implements OnInit {

  constructor() { }
  @Input('empForm') empForm : any
  @Output('addExperienceDetail') addExperienceDetail = new EventEmitter();
  @Output("removeExperienceDetail") removeExperienceDetail = new EventEmitter();
  isButtonDisable = false;
  action = 'EXPERIENCE_DETAIL'
  readOnly = false;

  ngOnInit(): void {
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
