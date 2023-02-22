import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myFilter'
})
export class MyFilterPipe implements PipeTransform {

  transform(employees:any[],searchText:string) {

    if(!employees) return [];
    if(!searchText) return employees;

    searchText = searchText.toLowerCase();

    return employees.filter((emp)=>{
      return JSON.stringify(emp).toLowerCase().includes(searchText);
    });
  }

}
