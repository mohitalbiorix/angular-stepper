import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(
    private router : Router,
    private employeeSvc : EmployeeService
  ) { }

  dataSource : any 
  @ViewChild(MatPaginator) paginator: any;
  employeedData : any = []

  displayedColumns: string[] = ['Name', 'Department', 'Designation','Email' ,'MobileNumber' , 'Resume' , 'Edit' , 'Delete'];

   ELEMENT_DATA: any
  

  ngOnInit(): void {
    this.getEmployeeListData();
    this.dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  addEmployee(){
    this.router.navigate(['/employee/add-employee'] ,{
      queryParams :{
        action :'ADD',
        empId : 0
      }
    })
  }


  getEmployeeListData(){
    this.employeedData = this.employeeSvc.getEmployeeData();
    console.log(this.employeedData[0]);
    if(this.employeedData[0] != undefined){
      this.ELEMENT_DATA = this.employeedData.map((item: any) => {
        return { 
          Name: item.personalDetailForm.firstName , 
          Department : item.professionalDetailForm.department,
          Designation : item.professionalDetailForm.designation,
          Email : item.personalDetailForm.email,
          MobileNumber : item.personalDetailForm.mobileNumber
        };
      });
    }
  }

  editEmployeeData(empId : number){
    this.router.navigate(['/employee/add-employee'],{
      queryParams :{
        action :'EDIT',
        empId : empId
      }
    })
  }



  


  


 

  

}
