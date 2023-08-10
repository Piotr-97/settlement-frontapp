import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SettlementService, financialSettlements } from '../services/settlement.service';

@Component({
  selector: 'app-form-settlement',
  templateUrl: './form-settlement.component.html',
  styleUrls: ['./form-settlement.component.css']
})
export class FormSettlementComponent {

  constructor(private fb: FormBuilder,private settlementService : SettlementService){
  }
  async ngOnInit() {
    
  }

  userForm = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    description: ['', Validators.required],
    expense: ['', Validators.required],
  });


  submit(event: Event) {
    if (this.userForm.valid) {
      const newSettlement = {
        firstname: this.userForm.value.firstname as string,
        lastname: this.userForm.value.lastname as string,
        description: this.userForm.value.description as string,
        expense: this.userForm.value.expense as string,
    
      };
      this.settlementService.addfinancialSettlement(newSettlement.firstname,newSettlement.lastname,parseFloat(newSettlement.expense)
      ,newSettlement.description);
      location.reload();
    }
}
}
