import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'; // Importez HttpErrorResponse

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  username: string | undefined;
  usernameOrEmail: string | undefined;

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {}

  navigateTo(destination: string) {
    this.router.navigate([destination]);
  }

  saveChanges() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  
    const updateData = {
      email: this.usernameOrEmail,
      username: this.username
    };
  
    this.http.post<any>('http://127.0.0.1:8000/api/update-profile/', updateData, { headers })
      .subscribe(
        (response: any) => {
          console.log('Profile updated successfully:', response);
        },
        (error: HttpErrorResponse) => { // Utilisez HttpErrorResponse pour capturer les erreurs HTTP
          console.error('Error updating profile:', error.error);
        }
      );
  }
}
