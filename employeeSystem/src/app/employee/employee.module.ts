import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { MatTableModule  } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { PersonalDetailComponent } from './add-employee/personal-detail/personal-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BankDetailsComponent } from './add-employee/bank-details/bank-details.component';
import { ProfessionalDetailComponent } from './add-employee/professional-detail/professional-detail.component';
import { EducationDetailComponent } from './add-employee/education-detail/education-detail.component';
import { StapperFooterComponent } from './stapper-footer/stapper-footer.component';
import { ExperienceDetailsComponent } from './add-employee/experience-details/experience-details.component';
import { CurrentOrganizationDetailComponent } from './add-employee/current-organization-detail/current-organization-detail.component';
import { OnlyNumericDirective } from './directive/only-numeric.directive';

@NgModule({
  declarations: [
    EmployeeListComponent,
    AddEmployeeComponent,
    PersonalDetailComponent,
    BankDetailsComponent,
    ProfessionalDetailComponent,
    EducationDetailComponent,
    StapperFooterComponent,
    ExperienceDetailsComponent,
    CurrentOrganizationDetailComponent,
    OnlyNumericDirective
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatIconModule,
    MatStepperModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule
  ]
})
export class EmployeeModule { }
