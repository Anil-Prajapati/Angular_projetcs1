import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableMR'
})
export class TableMRPipe implements PipeTransform {

  transform(name:String , gender:String) {
    if(gender=='male'){
      return 'Mr'+name;
    }else{
      return 'Ms'+name
    }
    
  }

}
