import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettlmentComponent } from './financial-settlement/settlment/settlment.component';
import { FormSettlementComponent } from './financial-settlement/form-settlement/form-settlement.component';
import { SettlmentListComponent } from './financial-settlement/settlment-list/settlment-list.component';

const routes: Routes = [
  {
    path: 'finance-settlement/:id',
    component: SettlmentComponent
    
  },
  {
    path: 'settlement-form',
    component: FormSettlementComponent
    
  },
  {
    path: 'settlements',
    component: SettlmentListComponent
    
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
