import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-organization-detail',
  templateUrl: './current-organization-detail.component.html',
  styleUrls: ['./current-organization-detail.component.css']
})
export class CurrentOrganizationDetailComponent implements OnInit {

  constructor() { }

  @Input() empForm : any 
  action = 'CURRENT_ORGANIZATION_DETAIL'

  ngOnInit(): void {
  }

  get f() {
    return this.empForm.controls.currentOrganizationDetailForm.controls;
  }

}
