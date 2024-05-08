import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.page.html',
  styleUrls: ['./payment-method.page.scss'],
})
export class PaymentMethodPage implements OnInit {

  constructor() { }

  ngOnInit() {}

  activeButton: number = 1;

  toggleCheck(button: number) {
    this.activeButton = button;
  }

  isChecked(button: number): boolean {
    return this.activeButton === button;
  }

}
