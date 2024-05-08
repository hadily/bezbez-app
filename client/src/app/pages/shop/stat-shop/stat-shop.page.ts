import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stat-shop',
  templateUrl: './stat-shop.page.html',
  styleUrls: ['./stat-shop.page.scss'],
})
export class StatShopPage implements OnInit {
  pendingOrders: number = 100;
  totalSales: number = 5000;
  newCustomers: number = 50;
  newOrders: number = 3000;
  yearlyOrders: number = 1200;
  yearlySales: number = 60000;
  totalNewCustomers: number = 500;
  totalProductsSold: number = 25000;

  constructor() { }

  ngOnInit() {
  }

}
