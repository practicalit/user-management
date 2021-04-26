import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { CreateOrderComponent } from './components/create-order/create-order.component';
import { UpdateOrderComponent } from './components/update-order/update-order.component';
import { ListUserComponent } from './components/list-user/list-user.component';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    EditUserComponent,
    CreateOrderComponent,
    UpdateOrderComponent,
    ListUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
