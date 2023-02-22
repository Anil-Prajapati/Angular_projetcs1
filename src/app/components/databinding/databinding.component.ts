import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit{
  Name:String='Anil Kumar Prajapati';
 image_url:String="https://tse4.mm.bing.net/th?id=OIP.uDeKlETqW8hxAmVFsibq0wHaEK&pid=Api&P=0";

 keritySetty:String="https://tse3.mm.bing.net/th?id=OIP.gEbqIZA0LqU2Im5nOcl8wwHaEj&pid=Api&P=0";

 rashamika_madhana="https://tse2.mm.bing.net/th?id=OIP.QBTOG1nhIKl913FcruzYcgHaFb&pid=Api&P=0";

 rashamika_mandhana="https://tse1.mm.bing.net/th?id=OIP.t7coTbCbSZ8gixh06SwCOgHaE8&pid=Api&P=0";

 flage:boolean =false;

 inputtype:String="password";
 f1(){
  alert('i am Anil Kumar Prajapati...')
 }
 
 f2(){
  this.flage=!this.flage
 }

 toggelShow(){
  if(this.flage===true){
    this.flage=false
  }else{
    this.flage=true
  }
 }

 Toggale(){
  if(this.inputtype === "password"){
    this.inputtype="text";

  }else{
    this.inputtype = "password";
  }
 }

 a:number=30;
 b:number=20;

msg:String='';
maxChar:number=100;
 

constructor(){}

ngOnInit(): void {

    
}
}
