import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {

  name="Anil Kumar Prajapati";

  num=5000;

  today=new Date();

  employee=[{id:'101', name:'Anil Kumar Prajpati',rollNo:'175407'},
  {id:'102',name:'Rahul Kumar Prajapti',rolNo:'175421'}]

  ordinate:number=21

  employees=[
    {id:'101', name:'Anil Kumar Prajpati',rollNo:'175407',gender:'male'},
    {id:'102',name:'Rahul Kumar Prajapti',rollNo:'175422',gender:'male'},
    {id:'103', name:'Kiran Prajapati',rollNo:'175423', gender:'female'},
    {id:'104',name:'Reena Prajapti',rollNo:'175424',gender:'female'},
  
  ]

  searchText:String='';
    

}
