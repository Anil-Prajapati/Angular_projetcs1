import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-cards',
  templateUrl: './employee-cards.component.html',
  styleUrls: ['./employee-cards.component.css']
})
export class EmployeeCardsComponent implements OnInit{

  @Input() employees:any
  
  ngOnInit(): void {
    
  }

}
