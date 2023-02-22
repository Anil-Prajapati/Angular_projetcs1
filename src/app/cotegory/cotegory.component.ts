import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cotegory',
  templateUrl: './cotegory.component.html',
  styleUrls: ['./cotegory.component.css']
})
export class CotegoryComponent implements OnInit{

  @Input() categoryObj:any

  ngOnInit(): void {
   // throw new Error('Method not implemented.');
  }

}
