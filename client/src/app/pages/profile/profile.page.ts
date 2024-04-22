import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { NavController } from '@ionic/angular';
=======
import { Router } from '@angular/router';
>>>>>>> hadil

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
<<<<<<< HEAD
  router: any;

  constructor(private navCtrl: NavController) {}

  ngOnInit() {}
  
=======

  constructor(private router: Router) {}

  ngOnInit() {}

>>>>>>> hadil
  navigateTo(destination: string) {
    this.router.navigate([destination]);
  }

<<<<<<< HEAD
  navigateToSettings() {
    this.navCtrl.navigateForward('settings');
  }

  navigateToPurchases() {
    // Redirigez l'utilisateur vers la page des achats
    this.navCtrl.navigateForward('/purchases');
  }

=======
>>>>>>> hadil
}
