import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  items: any[] = [
    { item_id: 2, path: '../../../assets/images/item-1.jpeg', name: 'Earrings', price: '20 DT', liked: false, quantity: 1 },
    { item_id: 2, path: '../../../assets/images/item-1.jpeg', name: 'Earrings', price: '20 DT', liked: false, quantity: 2 },
    { item_id: 2, path: '../../../assets/images/item-1.jpeg', name: 'Earrings', price: '20 DT', liked: false, quantity: 2 },
  ];

  constructor() { }

  ngOnInit() {
  }

}
