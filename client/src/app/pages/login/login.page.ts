import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  
  onSubmit(form: any) {
    
    if (this.email.trim() === '') {
      form.controls['email'].markAsTouched();
    }
    if (this.password.trim() === '') {
      form.controls['password'].markAsTouched();
    }

    if (form.valid) {
      console.log('Form submitted:', form.value);

      this.email = '';
      this.password = '';

      this.router.navigateByUrl('/profile');
    }
  }
}
