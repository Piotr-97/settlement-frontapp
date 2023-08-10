import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettlementService {
 
  private settlements: Promise<financialSettlements[]> = this.getAllSettlements();

  constructor(private readonly http: HttpClient)
  {

  }

  async sortSettlementsbyExpense() {
    (await this.settlements).sort((a, b) => a.expense - b.expense);
  }



  


  async getAllSettlements(): Promise<financialSettlements[]> {
    const response = await firstValueFrom(
      this.http.get<financialSettlements[]>('http://localhost:8080/finance-settlements')
    );
    console.log("res",response);
    return response;
  }

  // async getSettlementById(id :number): Promise<financialSettlements>{
  //   const response = await firstValueFrom(
  //     this.http.get<financialSettlements>(`http://localhost:8080/finance-settlements/${id}`)
  //   );
  //   return response;
  // }

  async getSettlementById(id :number): Promise<financialSettlements | undefined>{
    const settlementsList = await this.settlements;
    const settlement = settlementsList.find(s => s.idCompanySettlement == id)

      return settlement;
    

  }


  async addfinancialSettlement(firstname: string,lastname: string, expense: number,description: string): Promise<financialSettlements> {
  
    const financialSettlement = {
      firstname : firstname,
      lastname: lastname,
      description: description,
      expense : expense,
    };
    const response1 = await firstValueFrom(
    this.http.post<financialSettlements>('http://localhost:8080/finance-settlements',financialSettlement));

    console.log(response1, "resultat");
    return response1
  }

  async deletefinancialSettlement(financialSettlement: financialSettlements):  Promise<void> {
    await firstValueFrom(
     this.http.delete<void>(`http://localhost:8080/finance-settlements/${financialSettlement.idCompanySettlement}`)
   
     );
 }

 async getSettlements() : Promise<financialSettlements[]>{
  return this.settlements;
 }




}





export interface financialSettlements{
  idCompanySettlement : number;
  firstname : string;
  lastname: string;
  description: string;
  expense : number;
  status: string;

}
