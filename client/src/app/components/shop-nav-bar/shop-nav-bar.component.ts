import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-shop-nav-bar',
  templateUrl: './shop-nav-bar.component.html',
  styleUrls: ['./shop-nav-bar.component.scss'],
})
export class ShopNavBarComponent implements OnInit {
  constructor(public navCtrl: NavController) {}

  ngOnInit() {}

  gotoHomePage() {
    this.navCtrl.navigateForward('/home'); // Assuming 'home' is the route URL
  }
}
