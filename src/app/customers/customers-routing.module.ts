import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddnewcustomerComponent } from './addnewcustomer/addnewcustomer.component';
import { CustomersComponent } from './customers.component';

const routes: Routes = [
  { path: '', component: CustomersComponent },
  { path: 'addnewcustomer', component: AddnewcustomerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
