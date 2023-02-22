import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prarent',
  templateUrl: './prarent.component.html',
  styleUrls: ['./prarent.component.css']
})
export class PrarentComponent implements OnInit{

  a:number;
  b:number;
  name:string='Anil Kumar Prajapati';

  f1(){
    alert('I am f1 from parent...')
  }
//that are the good way decleared in angular
  constructor() {
    this.a=10
    this.b=20
    console.log("Parent constructor")
  }
  

  ngOnChanges() {
    console.log('Parent ngOnChanges');
  }

  //ngDoCheck is colled a watch man he see all those things what you do if any thing do ngDoCheck is imforming the browser
  ngDoCheck() {
    console.log('Parent ngDoCheck');
  }
  // ngAfterContentInit() {
  //   console.log('Parent ngAfterContentInit');
  // }
  // ngAfterContentChecked() {
  //   console.log('Parent ngAfterContentChecked')
  // }
  // ngAfterViewInit() {
  //   console.log('Parent ngAfterViewInit');
  // }
  // ngAfterViewChecked() {
  //   console.log('Parent ngAfterViewChecked');
  // }
  // ngOnDestroy() {
  //   console.log('Parent ngOnDestory');
  // }
ngOnInit(): void {
    console.log('ngOnChnages')
}
  
}
