import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  items: any[] = [
    { item_id: 2, path: '../../../assets/images/item-1.jpeg', name: 'Earrings', price: '20 DT', liked: false, quantity: 1 },
    { item_id: 2, path: '../../../assets/images/item-1.jpeg', name: 'Earrings', price: '20 DT', liked: false, quantity: 2 },
    { item_id: 2, path: '../../../assets/images/item-1.jpeg', name: 'Earrings', price: '20 DT', liked: false, quantity: 2 },
    { item_id: 2, path: '../../../assets/images/item-1.jpeg', name: 'Earrings', price: '20 DT', liked: false, quantity: 2 },
    { item_id: 2, path: '../../../assets/images/item-1.jpeg', name: 'Earrings', price: '20 DT', liked: false, quantity: 2 },
    { item_id: 2, path: '../../../assets/images/item-1.jpeg', name: 'Earrings', price: '20 DT', liked: false, quantity: 2 },
    { item_id: 2, path: '../../../assets/images/item-1.jpeg', name: 'Earrings', price: '20 DT', liked: false, quantity: 2 }
  ];
  
  @Output() refreshEvent = new EventEmitter<void>();

  constructor(private router: Router) { }

  ngOnInit() {}

  goBack() {
    const currentUrlTree = this.router.parseUrl(this.router.url);
    const segments = currentUrlTree.root.children['primary'].segments;
    const newUrl = segments.slice(0, -1).map(segment => segment.path).join('/');
    this.router.navigateByUrl(newUrl);
    this.refreshEvent.emit();
  }
  
  totalItems = 2;
  totalPrice = 200
  shippingFee = 7.00;
  subTotal = 207;

  navigateTo(destination: string) {
    this.router.navigate([destination]);
  }


}
