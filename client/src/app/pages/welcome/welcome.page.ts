import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  items: any[] = [
    { item_id: 1, path: '../../../assets/images/item-2.jpeg', name: 'Earrings', price: '20 DT', liked: true },
    { item_id: 2, path: '../../../assets/images/item-2.jpeg', name: 'Earrings', price: '20 DT', liked: false },
    { item_id: 2, path: '../../../assets/images/item-2.jpeg', name: 'Earrings', price: '20 DT', liked: false },
    { item_id: 2, path: '../../../assets/images/item-2.jpeg', name: 'Earrings', price: '20 DT', liked: false },
    { item_id: 2, path: '../../../assets/images/item-2.jpeg', name: 'Earrings', price: '20 DT', liked: false },
    { item_id: 2, path: '../../../assets/images/item-2.jpeg', name: 'Earrings', price: '20 DT', liked: false }
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  navigateToCheckBezbezes() {
    this.router.navigate(['/check']);
  }

  navigateToItemDetails(item_id: number) {
    const currentUrl = this.router.url;
    const destination = currentUrl + '/item-details/' + item_id;
    this.router.navigateByUrl(destination);
  }

}
