import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPortalComponent } from './user-portal.component';
import { UserPortalRoutingModule } from './user-portal-routing.module';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrudComponent } from './crud/crud.component';
import { ApiComponent } from './api/api.component';


@NgModule({
  declarations: [UserPortalComponent, HomeComponent, CrudComponent, ApiComponent],
  imports: [
    CommonModule,
    UserPortalRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class UserPortalModule { }
