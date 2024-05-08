import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.page.html',
  styleUrls: ['./changepassword.page.scss'],
})
export class ChangepasswordPage implements OnInit {
 password: string = ''; 
  password1: string = '';
  constructor(private router: Router) { }

  ngOnInit() {
  }

  
  onSubmit(form: any) {
    // Validate password match
    if (this.password !== this.password1) {
      alert('Passwords do not match. Please try again.');
      return; // Prevent further form submission if passwords don't match
    }

    // Handle empty password case (improved from both responses)
    if (this.password.trim() === '' || this.password1.trim() === '') {
      form.controls['password'].markAsTouched();
      form.controls['password1'].markAsTouched(); // Mark both password fields as touched
      return; // Prevent further form submission if passwords are empty
    }

    if (form.valid) {
      console.log('Form submitted:', form.value);
      this.password = '';
      this.password1 = '';
      this.router.navigateByUrl('/login'); // Navigate to login page
    }
  }
}

