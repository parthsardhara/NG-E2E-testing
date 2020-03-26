import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPortalComponent } from './user-portal.component';
import { UserPortalRoutingModule } from './user-portal-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [UserPortalComponent, HomeComponent],
  imports: [
    CommonModule,
    UserPortalRoutingModule
  ]
})
export class UserPortalModule { }