import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './components/add-user/add-user.component';
import { CreateOrderComponent } from './components/create-order/create-order.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { ListUserComponent } from './components/list-user/list-user.component';


const routes: Routes = [
  { path: 'edit-user', component: EditUserComponent },
  { path: 'create-user', component: AddUserComponent },
  { path: 'create-order', component: CreateOrderComponent },
  { path: 'edit-order', component: EditUserComponent },
  { path: 'list-users', component: ListUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
