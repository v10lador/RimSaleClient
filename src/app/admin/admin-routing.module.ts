import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { ReportsComponent } from './components/reports/reports.component';
import {EmployeesListComponent} from './components/employees-list/employees-list.component';
import {TireListComponent} from './components/tire-list/tire-list.component';
import {TireFormComponent} from './components/tire-form/tire-form.component';

import {EmployeeEditComponent} from './components/employee-edit/employee-edit.component';
import {TireEditComponent} from './components/tire-list/tire-edit/tire-edit.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children:
    [
      {
        path: '',
        component: ReportsComponent
      },
      {
        path: 'employees',
        component: EmployeesListComponent
      },
      {
        path: 'employees/create',
        component: EmployeeFormComponent
      },
      {
        path: 'employees/edit/:id',
        component: EmployeeEditComponent
      },
      {
        path: 'tires',
        component: TireListComponent
      },
      {
        path: 'tires/create',
        component: TireFormComponent
      },
      {
        path: 'tires/edit/:id',
        component: TireEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
