import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpHandlerService } from '../../http-handler.service'; // Adjust the path as needed
import { HttpErrorResponse } from '@angular/common/http';

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
    private httpHandler: HttpHandlerService // Inject the HTTP handler service
  ) {}

  async onSubmit(form: any) {
    if (form.valid) {
      const credentials = {
        username_or_email: this.usernameOrEmail, // Use the correct field name for the API
        password: this.password
      };

      this.httpHandler.login(credentials).subscribe(
        (response: any) => { // Assuming the token is received in the response
          if (response.token) {
            console.log('Token:', response.token); // Log the token
            localStorage.setItem('token', response.token); // Store the token in local storage
            //this.router.navigateByUrl('/signup'); // Navigate to the home page on successful login
          } else {
            console.log('Token not found in the response.'); // Log error if token is not received
          }
        },
        (error: HttpErrorResponse) => {
          if (error.status === 401 && error.error && error.error.error === 'Invalid credentials') {
            this.handleInvalidCredentials(); // Handle invalid credentials error
          } else {
            console.log('Login error:', error); // Log other types of errors
          }
        }
      );
    }
  }

  handleInvalidCredentials() {
    this.credentialsError = 'Invalid credentials. Please try again.';
  }

  clearCredentialsError() {
    this.credentialsError = ''; // Clear the credentials error message
  }
}
