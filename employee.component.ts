import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import {Employee} from '../employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
employees: Employee[];
constructor(private employeeService: EmployeeService, private  router: Router ) { }

ngOnInit() {
  this.getEmployees();
}
private getEmployees(){
  this.employeeService.getEmployeesList().subscribe(data=>{
this.employees=data;
  });
}
updateEmployee(id: number){
  console.log(`-----------`)
  this.router.navigate(['update-employee', id]);
}
deleteEmployee(id: number){
  this.employeeService.deleteEmployee(id).subscribe(data=>{
    this.getEmployees();
    console.log(data);
  })
}

}
