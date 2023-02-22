import { Component, Input, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-chiled1',
  templateUrl: './chiled1.component.html',
  styleUrls: ['./chiled1.component.css']

})
export class Chiled1Component implements OnInit{

@Input() chileda:any

@Input() f1:any

@Input() name:any
  

  ngOnInit(): void {
    console.log('ngOnChnages class')
  }
  
  // if you change of inputs values ngOnChanges is inform you your data is changed if it is not inputs columnc then it will not changed
  ngOnChanges(MyChnages:SimpleChange) {
    console.log('Parent ngOnChanges');
    console.log(MyChnages)
  }

  
}
