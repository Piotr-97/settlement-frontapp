import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettlmentListComponent } from './settlment-list/settlment-list.component';
import { SettlmentComponent } from './settlment/settlment.component';
import { FormSettlementComponent } from './form-settlement/form-settlement.component';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    SettlmentListComponent,
    SettlmentComponent,
    FormSettlementComponent,
  ],
  imports: [
    CommonModule, AppRoutingModule,ReactiveFormsModule
  ],
  exports:[
    SettlmentListComponent,FormSettlementComponent
  ]
})
export class FinancialSettlementModule { }
