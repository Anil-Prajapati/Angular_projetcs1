import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css'],
  outputs:['addEvent']
  
})
export class EmployeeAddComponent implements OnInit{

  addEvent=new EventEmitter()

  addEmp(a:any,b:any,c:any){

    const newEmp={
       eid:a,
       name:b,
       sal:c
    }
    this.addEvent.emit(newEmp)
  }
  constructor(){}

  ngOnInit(): void {
   
  }

}

