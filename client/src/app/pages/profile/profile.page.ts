import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  router: any;

  constructor(private navCtrl: NavController) {}

  ngOnInit() {}
  
  navigateTo(destination: string) {
    this.router.navigate([destination]);
  }

  navigateToSettings() {
    this.navCtrl.navigateForward('settings');
  }

  navigateToPurchases() {
    // Redirigez l'utilisateur vers la page des achats
    this.navCtrl.navigateForward('/purchases');
  }

}
