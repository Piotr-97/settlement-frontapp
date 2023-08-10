import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SettlementService } from '../services/settlement.service';

@Component({
  selector: 'app-modify-form',
  templateUrl: './modify-form.component.html',
  styleUrls: ['./modify-form.component.css']
})
export class ModifyFormComponent {

  constructor(private fb: FormBuilder,private settlementService : SettlementService){
  }
  async ngOnInit() {
    
  }

  userForm = this.fb.group({
    idcompanysettlement: ['', Validators.required],
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    description: ['', Validators.required],
    expense: ['', Validators.required],
  });


  submit(event: Event) {
    if (this.userForm.valid) {
      const newSettlement = {
        idcompanysettlement: this.userForm.value.idcompanysettlement as string,
        firstname: this.userForm.value.firstname as string,
        lastname: this.userForm.value.lastname as string,
        description: this.userForm.value.description as string,
        expense: this.userForm.value.expense as string,
    
      };

    
      this.settlementService.modifyfinancialSettlement(parseFloat( newSettlement.idcompanysettlement),newSettlement.firstname,newSettlement.lastname,parseFloat(newSettlement.expense)
      ,newSettlement.description);
    
    }
    location.reload();
}
}
