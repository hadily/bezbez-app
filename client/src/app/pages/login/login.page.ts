import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
    usernameOrEmail: string = '';
    password: string = '';
    credentialsError: string = '';
  
    constructor(
      private http: HttpClient,
      private router: Router,
      private alertController: AlertController
    ) {}
  
    onSubmit(loginForm: any) {
      if (loginForm.valid) {
        const loginData = {
          username_or_email: this.usernameOrEmail, // Assurez-vous que la clé correspond à celle utilisée par votre API Django
          password: this.password
        };
  
        this.http.post('http://127.0.0.1:8000/api/login/', loginData)
          .subscribe(
            (response: any) => {
              if (response.response === 'success') {
                this.router.navigate(['/store']); // Redirect to dashboard after successful login
              } else {
                this.credentialsError = 'Invalid credentials. Please try again.';
              }
            },
            (error: any) => {
              this.credentialsError = 'An error occurred. Please try again later.';
            }
          );
      }
    }
  
    clearCredentialsError() {
      this.credentialsError = '';
    }
  }