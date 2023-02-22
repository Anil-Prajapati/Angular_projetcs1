import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { CenterComponent } from './center/center.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ElectronicsComponent } from './components/electronics/electronics.component';
import { FooterComponent } from './footer/footer.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesComponent } from './components/directives/directives.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { GreetComponent } from './greet/greet.component';
import { PaginationComponent } from './pagination/pagination.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CrudOperationComponent } from './crud-operation/crud-operation.component';
import { HttpClientModule } from '@angular/common/http';
import { PipeComponent } from './pipe/pipe.component';
import { NameprifixPipe } from './custom-pipe/nameprifix.pipe';
import { TableMRPipe } from './custom-pipe/table-mr.pipe';
import { MyFilterPipe } from './custom-pipe/my-filter.pipe';
import { Chiled1Component } from './chiled1/chiled1.component';
import { Child2Component } from './child2/child2.component';
import { PrarentComponent } from './prarent/prarent.component';
import { CotegoriesComponent } from './cotegories/cotegories.component';
import { CotegoryComponent } from './cotegory/cotegory.component';
import { EmployeeCrudComponent } from './employee-crud/employee-crud.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeCardsComponent } from './employee-cards/employee-cards.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CenterComponent,
    NavbarComponent,
    CarouselComponent,
    ElectronicsComponent,
    FooterComponent,
    DatabindingComponent,
    DirectivesComponent,
    UsersComponent,
    UserDetailsComponent,
    GreetComponent,
    PaginationComponent,
    CrudOperationComponent,
    PipeComponent,
    NameprifixPipe,
    TableMRPipe,
    MyFilterPipe,
    Chiled1Component,
    Child2Component,
    PrarentComponent,
    CotegoriesComponent,
    CotegoryComponent,
    EmployeeCrudComponent,
    EmployeeAddComponent,
    EmployeeCardsComponent,
    EmployeeListComponent,
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
