import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarListComponent } from './car-list/car-list.component';
import { CarEditComponent } from './car-edit/car-edit.component';
import { CarAddComponent } from './car-add/car-add.component';

const routes: Routes = [
  { path: '', redirectTo: 'car-list', pathMatch: 'full' },
  { path: 'car-list', component: CarListComponent },
  { path: 'car-edit/:id', component: CarEditComponent },
  { path: 'car-add', component: CarAddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
