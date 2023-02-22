import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { EmployeeModel } from './crud-operation.model';
import {ApiService} from '../Data/api.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-crud-operation',
  templateUrl: './crud-operation.component.html',
  styleUrls: ['./crud-operation.component.css']
})
export class CrudOperationComponent implements OnInit{

  formValue!:FormGroup
  employeeDetailsObj:EmployeeModel =new EmployeeModel();
  employeeData !:any
  showAdd!:boolean;
  showUpdate!:boolean;
  p:number=1;
  searchText:string='';
  constructor(private formbuilder:FormBuilder,private api:ApiService){}
  addCard(){
    Swal.fire('Congratulation !','Your Data is add SuccessFully!','success')
  }
  DeleteCard(){
    Swal.fire('Congratulation !','Your Data Is Deleted SuccessFully!','success')
  }
  UpdateCard(){
    Swal.fire('Congratulation !','Your Data Is Update SuccessFully!','success')
  }
  
  ngOnInit(): void {
   this.formValue=this.formbuilder.group({
    FirstName:[' '],
    LastName:[' '],
    Email:[' '],
    Mobile:[' '],
    Salary:[' ']

   })
   this.getAllEmployee();
  }

  clickEmployeeHidd(){
    this.formValue.reset();
    this.showAdd=true
    this.showUpdate=false
  }

  postEmployeeDetails(){
    this.employeeDetailsObj.FirstName=this.formValue.value.FirstName;
    this.employeeDetailsObj.LastName=this.formValue.value.LastName;
    this.employeeDetailsObj.Email=this.formValue.value.Email;
    this.employeeDetailsObj.Mobile=this.formValue.value.Mobile;
    this.employeeDetailsObj.Salary=this.formValue.value.Salary;

    this.api.postEmployee(this.employeeDetailsObj)
    .subscribe(res=>{
      console.log(res);
      let ref=document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllEmployee();
    },error=>{
      console.log("Something want's Wrong")
    })
  }

  getAllEmployee(){
    this.api.getEmployee().subscribe(res=>{
      this.employeeData=res
    })
  }

  deleteEmployees(row : any){
    this.api.deleteEmployee(row.id)
    .subscribe(res=>{
      this.getAllEmployee();
    })
  }

  onEdit(row:any){
    this.showAdd=false
    this.showUpdate=true
    this.employeeDetailsObj.id = row.id;
    this.formValue.controls['FirstName'].setValue(row.FirstName);
    this.formValue.controls['LastName'].setValue(row.LastName);
    this.formValue.controls['Email'].setValue(row.Email);
    this.formValue.controls['Mobile'].setValue(row.Mobile);
    this.formValue.controls['Salary'].setValue(row.Salary);

  }

  upadateData(){
    this.employeeDetailsObj.FirstName = this.formValue.value.FirstName;
    this.employeeDetailsObj.LastName = this.formValue.value.LastName;
    this.employeeDetailsObj.Email = this.formValue.value.Email;
    this.employeeDetailsObj.Mobile = this.formValue.value.Mobile;
    this.employeeDetailsObj.Salary = this.formValue.value.Salary;
  
    
    this.api.updateEmployee(this.employeeDetailsObj,this.employeeDetailsObj.id)
    .subscribe(res=>{
      let ref=document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllEmployee();
    },error=>{
      console.log("something wantrong...")
    })
  }

  viewEmployee(row : any){
    this.api.deleteEmployee(row.id)
    .subscribe(res=>{
      alert("Are You Ok To Deleted....")
      this.getAllEmployee();
    })
  }

}
