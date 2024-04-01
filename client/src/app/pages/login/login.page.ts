import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpHandlerService } from '../../http-handler.service'; // Adjust the path as needed
import { HttpErrorResponse } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  usernameOrEmail: string = ''; // Email or Username
  password: string = '';
  credentialsError: string = '';

  constructor(
    private router: Router,
    private httpHandler: HttpHandlerService,
    private storage: Storage // Inject Ionic Storage
  ) {}

  async onSubmit(form: any) {
    if (form.valid) {
      const credentials = {
        username_or_email: this.usernameOrEmail,
        password: this.password
      };

      try {
        const response = await this.httpHandler.login(credentials).toPromise();
        if (response.token) {
          console.log('Token:', response.token);

          // Store token in Ionic Storage
          await this.storage.set('token', response.token);
          console.log('Token stored in Ionic Storage.');

          // Navigate to the next page after storing the token
         // this.router.navigateByUrl('/next-page');
        } else {
          console.log('Token not found in the response.');
          // Handle other scenarios where token is missing or invalid
        }
      } catch (error: any) {
        if (error.status === 401 && error.error && error.error.error === 'Invalid credentials') {
          this.handleInvalidCredentials();
        } else {
          console.log('Login error:', error);
          // Handle other types of errors
        }
      }
    }
  }

  handleInvalidCredentials() {
    this.credentialsError = 'Invalid credentials. Please try again.';
  }

  clearCredentialsError() {
    this.credentialsError = ''; 
  }
}
