import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  items: any[] = [
    { path: '../../../assets/images/item-2.jpeg', name: 'Earrings', price: '20 DT', liked: true },
    { path: '../../../assets/images/item-2.jpeg', name: 'Earrings', price: '20 DT', liked: false },
    { path: '../../../assets/images/item-2.jpeg', name: 'Earrings', price: '20 DT', liked: false },
    { path: '../../../assets/images/item-2.jpeg', name: 'Earrings', price: '20 DT', liked: false },
    { path: '../../../assets/images/item-2.jpeg', name: 'Earrings', price: '20 DT', liked: false },
    { path: '../../../assets/images/item-2.jpeg', name: 'Earrings', price: '20 DT', liked: false }
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  navigateToCheckBezbezes() {
    this.router.navigate(['/check']);
  }

}
