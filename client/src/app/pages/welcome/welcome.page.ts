import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  items: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  fetchItems() {
    this.http.get<any>('http://your-django-backend-url/api/get-products').subscribe(
      (response) => {
        this.items = response.products;
      },
      (error) => {
        console.error('Error fetching items:', error);
      }
    );
  }

}
