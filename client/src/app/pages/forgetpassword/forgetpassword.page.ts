import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.page.html',
  styleUrls: ['./forgetpassword.page.scss'],
})
export class ForgetpasswordPage implements OnInit {
  email: string = '';


  constructor(private router: Router) { }
  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  ngOnInit() {
  }
  onSubmit(form: any) {
    
    if (this.email.trim() === '') {
      form.controls['email'].markAsTouched();
    }
   

    if (form.valid) {
      console.log('Form submitted:', form.value);

      this.email = '';
      this.router.navigateByUrl('/otp');


    }
  }

}
