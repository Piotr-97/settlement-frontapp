import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FinancialSettlementModule } from './financial-settlement/financial-settlement.module';
import { BannerComponent } from './banner/banner.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FinancialSettlementModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
