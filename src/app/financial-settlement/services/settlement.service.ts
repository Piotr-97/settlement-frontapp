import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettlementService {

  constructor(private readonly http: HttpClient)
  {}
  financialSettlements: financialSettlements[] =[];


  async getAllSettlements(): Promise<financialSettlements[]> {
    const response = await firstValueFrom(
      this.http.get<financialSettlements[]>('http://localhost:8080/finacial-settlements')
    );
    return response;
  }
}




export interface financialSettlements{
  idCompanySettlement : number;
  firstname : String;
  lastname: String;
  description: String;
  expense : number;
  status: String;

}
