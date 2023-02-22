import { Component, OnInit } from '@angular/core';
import * as data from './users.json';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit{

  usersDetails = (data as any).default;

  colName=Object.keys(this.usersDetails[0])

  ngOnInit(): void {
      
  }
}
