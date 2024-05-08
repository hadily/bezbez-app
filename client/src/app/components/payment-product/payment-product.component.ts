import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-payment-product',
  templateUrl: './payment-product.component.html',
  styleUrls: ['./payment-product.component.scss'],
})
export class PaymentProductComponent  implements OnInit {

  @Input() item: any;

  constructor() { }

  ngOnInit() {}

}
