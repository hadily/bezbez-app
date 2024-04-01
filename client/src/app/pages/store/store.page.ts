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

  goBack() {
    const currentUrlTree = this.router.parseUrl(this.router.url);
    const segments = currentUrlTree.root.children['primary'].segments;
    const newUrl = segments.slice(0, -2).map(segment => segment.path).join('/');
    this.router.navigateByUrl(newUrl);
  }

  navigateToItemDetails(item_id: number) {
    const currentUrl = this.router.url;
    const destination = currentUrl + '/item-details/' + item_id;
    this.router.navigateByUrl(destination);
  }

}
