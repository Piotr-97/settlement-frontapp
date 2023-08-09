import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettlmentListComponent } from './settlment-list/settlment-list.component';
import { SettlmentComponent } from './settlment/settlment.component';
import { FormSettlementComponent } from './form-settlement/form-settlement.component';



@NgModule({
  declarations: [
    SettlmentListComponent,
    SettlmentComponent,
    FormSettlementComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SettlmentListComponent
  ]
})
export class FinancialSettlementModule { }
