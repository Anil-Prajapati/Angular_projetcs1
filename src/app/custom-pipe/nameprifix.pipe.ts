import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameprifix'
})
export class NameprifixPipe implements PipeTransform {

  transform(num:number){

    let rem=num%10;

    if(rem===1){
      return num +'st';
    }
    else if(rem===2){
      return num +'nd';
    
    }else if(rem===3){
      return num +'rd';
    }
    else if(rem===4){
      return num +'th';
    }
    else if(rem===5){
      return num +'th';
    }
    else if(rem===6){
      return num +'th';
    }
    else if(rem===7){
      return num +'th';
    }
    else if(rem===8){
      return num +'th';
    }
    else if(rem===9){
      return num +'th';
    }
    else{
      return num
    }
  }
  }


