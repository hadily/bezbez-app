import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {

  items: any[] = [
    { item_id: 1, path: '../../../assets/images/item-2.jpeg', name: 'Earrings', price: '20 DT', liked: true },
    { item_id: 2, path: '../../../assets/images/item-2.jpeg', name: 'Earrings', price: '20 DT', liked: false },
    { item_id: 2, path: '../../../assets/images/item-2.jpeg', name: 'Earrings', price: '20 DT', liked: false },
    { item_id: 2, path: '../../../assets/images/item-2.jpeg', name: 'Earrings', price: '20 DT', liked: false },
    { item_id: 2, path: '../../../assets/images/item-2.jpeg', name: 'Earrings', price: '20 DT', liked: false },
    { item_id: 2, path: '../../../assets/images/item-2.jpeg', name: 'Earrings', price: '20 DT', liked: false }
  ];

  constructor(private router: Router) { }

  ngOnInit() {}

  follow: boolean = false;

  toggleFollow() {
    this.follow = !this.follow;
  }

}
