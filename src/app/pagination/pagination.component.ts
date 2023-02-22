import { Component } from '@angular/core';
import * as data from './UserDetails.json'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {

  userDetails=(data as any).default

  colName=Object.keys(this.userDetails[0])

  searchText:string='';
p:number=1

addCard(){
  Swal.fire('Congratulation !','Your Item is add to Card!','success')
}
  

}
