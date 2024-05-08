import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {
  firstName: string | undefined;
  lastName: string | undefined;
  username: string | undefined;
  email: string | undefined;
  password: string = ''; // Assign an initial value to the 'password' property
  usernameError: string | undefined;
  emailError: string | undefined;
  firstNameControl: any; // Ajout de la déclaration de la propriété firstNameControl
  lastNameControl: any; // Ajout de la déclaration de la propriété lastNameControl
  usernameControl: any; // Ajout de la déclaration de la propriété usernameControl
  emailControl: any; // Ajout de la déclaration de la propriété emailControl
  passwordControl: any; // Ajout de la déclaration de la propriété passwordControl
  router: any;
  navCtrl: any;

  constructor(
    private http: HttpClient,
    private alertController: AlertController  ) {}




  onSubmit() {
    const userData = {
      first_name: this.firstName,
      last_name: this.lastName,
      username: this.username,
      email: this.email,
      password: this.password
    };

    this.http.post('http://127.0.0.1:8000/api/signup/', userData)
      .subscribe(
        (response: any) => {
          this.presentAlert('Success', 'Signup successful');
          this.navCtrl.navigateForward('/login');
        },
        (error: any) => {
          this.presentAlert('Error', error.error.error || 'An error occurred');
        }
      );
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }
}
