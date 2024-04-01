import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent  implements OnInit {

  @Input() item: any;

  constructor() { }

  ngOnInit() {}

  increaseQuantity() {
    this.item.quantity++;
  }

  decreaseQuantity() {
    if (this.item.quantity > 1) {
      this.item.quantity--;
    }
  }

}
