import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { SettlementService, financialSettlements } from '../services/settlement.service';

@Component({
  selector: 'app-settlment',
  templateUrl: './settlment.component.html',
  styleUrls: ['./settlment.component.css']
})
export class SettlmentComponent {

  
  settlement :financialSettlements | null = null ;

  constructor(private service: SettlementService, private route: ActivatedRoute){
    
    
  }
 
  async ngOnInit() {
    this.route.params.subscribe(async (params) => {
      const id = params['id'];

      try {
        const result = await this.service.getSettlementById(id);
        this.settlement = result || null; 
      } catch (error) {
        console.error('Błąd pobierania rozliczenia:', error);
      }
    });
  }

}
