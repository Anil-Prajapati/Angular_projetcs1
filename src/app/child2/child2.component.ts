import { Component, Input, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css'],

})
export class Child2Component implements OnInit{

  @Input() b:any

  @Input() f1:any

  @Input() name:any
  
  ngOnInit(): void {
    
  }
   // if you change of inputs values ngOnChanges is inform you your data is changed if it is not inputs columnc then it will not changed
   ngOnChanges(MyChnages:SimpleChange) {
    console.log('Parent ngOnChanges');
    console.log(MyChnages);
  }

}
