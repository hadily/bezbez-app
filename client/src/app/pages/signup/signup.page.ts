import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router) {} 

  ngOnInit() {
  }

  onSubmit(form: any) {
    if (this.username.trim() === '') {
      form.controls['username'].markAsTouched();
    }
    if (this.email.trim() === '') {
      form.controls['email'].markAsTouched();
    }
    if (this.password.trim() === '') {
      form.controls['password'].markAsTouched();
    }

    if (form.valid) {
      console.log('Form submitted:', form.value);

      // Réinitialiser les valeurs des champs du formulaire
      this.username = '';
      this.email = '';
      this.password = '';

      // Rediriger vers la page de connexion
      this.router.navigateByUrl('/login');
    }
  }
}
