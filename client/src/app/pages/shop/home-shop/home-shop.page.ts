import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home-shop',
  templateUrl: './home-shop.page.html',
  styleUrls: ['./home-shop.page.scss'],
})
export class HomeShopPage implements OnInit {

  constructor(public navCtrl: NavController) {}

  ngOnInit() {}

  gotoHomePage() {
    this.navCtrl.navigateForward('/home'); // Assuming 'home' is the route URL
  }

}
