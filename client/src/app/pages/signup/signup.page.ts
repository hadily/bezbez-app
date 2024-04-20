import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpHandlerService } from '../../http-handler.service'; // Adjust the path as needed
import { AlertController } from '@ionic/angular';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  username: string = '';
  password: string = '';
  phone: string = '';
  usernameError: string = '';
  emailError: string = '';

  constructor(
    private router: Router,
    private httpHandler: HttpHandlerService,
    private alertController: AlertController
  ) {}

  async onSubmit(form: any) {
    this.clearErrors(); // Clear any previous error messages
    if (this.firstName.trim() === '') {
      form.controls['firstName'].markAsTouched();
    }
    // Add validations for lastName, email, username, password, and phone here

    if (form.valid) {
      const userData = {
        'first_name': this.firstName,
        'last_name': this.lastName,
        'email': this.email,
        'username': this.username,
        'password': this.password,
        'phone': this.phone
      };
      this.httpHandler.signup(userData).subscribe(
        (response: any) => {
         // console.log('Signup response:', response);
          this.router.navigateByUrl('/login');
         
        },
        (error: HttpErrorResponse) => {
          if (error.status === 400 && error.error && error.error.username && error.error.username[0] === 'A user with that username already exists.') {
            this.handleUsernameAlreadyExists();
          } else if (error.status === 400 && error.error && error.error.error === 'Email already exists') {
            this.handleEmailAlreadyExists();
          } else {
            this.handleError(error);
          }
        }
      );
    }
  }

  clearErrors() {
    this.usernameError = '';
    this.emailError = '';
  }

  handleUsernameAlreadyExists() {
    this.usernameError = 'A user with that username already exists. Please choose a different username.';
  }

  handleEmailAlreadyExists() {
    this.emailError = 'Email already exists. Please use a different email address.';
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'An error occurred during signup. Please try again later.';
    if (error.error && error.error.message) {
      errorMessage = error.error.message;
    }
    this.alertController.create({
      header: 'Signup Error',
      message: errorMessage,
      buttons: ['OK']
    }).then(alert => alert.present());
  }

  // Other methods as needed
}
