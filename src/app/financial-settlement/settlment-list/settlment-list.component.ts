import { Component, OnInit } from '@angular/core';
import { SettlementService, financialSettlements,} from '../services/settlement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settlment-list',
  templateUrl: './settlment-list.component.html',
  styleUrls: ['./settlment-list.component.css']
})
export class SettlmentListComponent implements OnInit{




  settlements: financialSettlements[] =[];

  constructor(private readonly setttleService : SettlementService,private router : Router){
   

  } 
  async  ngOnInit() {
    this.settlements = await this.setttleService.getSettlements();
    console.log("component", this.settlements)
  }

  click(id: number){
    this.router.navigate(["/finance-settlement",id]);
  }

  async delete(settlement: financialSettlements){
    this.setttleService.deletefinancialSettlement(settlement);
    this.settlements = await this.setttleService.getSettlements();
    console.log("remove");
    location.reload();

    
  }

  sortByExpenseAsc() {
    this.setttleService.sortSettlementsbyExpense();
    }


}
