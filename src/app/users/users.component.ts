import { Component, OnInit } from '@angular/core';
import * as data from './products.json';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  f1(){
    alert('So Much Good Product Please Buy The Product...')
  }
  users = (data as any).default;
  colvalue=Object.keys(this.users[0])
showTable:boolean=true
  
constructor(){}
  ngOnInit(): void {
      
  }
}
