import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SnackBarService } from '../../service/snack-bar.service';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss']
})
export class CreditCardComponent implements OnInit {

  constructor(
    private _SnackBarService : SnackBarService
  ) { }

  @ViewChild('creditCard') creditCard !: NgForm

  ngOnInit(): void {
  }

  onConfirm(eve : Event){
     let onsubmit = this.creditCard.value
     let val = onsubmit.CardOwner
     this.creditCard.reset()
     this._SnackBarService.openSnackBar(`Confrim your Purchase ${onsubmit.CardOwner} 
      and your Credit Card no is ${onsubmit.CreditCard}`)
  }
}
