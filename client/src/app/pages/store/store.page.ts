import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {

  items: { name: string, price: string }[] = []; // Initialize items array with specific properties

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.fetchItems(); // Fetch items when the component initializes
  }

  fetchItems() {
    this.http.get<any[]>('http://127.0.0.1:8000/shop/products').subscribe(
      (response: any[]) => {
        // Log the response to see its structure
        console.log('API Response:', response);
  
        // Check if the response contains the required fields
        if (response && Array.isArray(response)) {
          this.items = response.map(item => ({
            item_id: item.id,
            name: item.product_name,
            price: item.price + ' DT',
            liked: item.liked, // Assuming 'liked' is a boolean field in your API response
          }));
        }
      },
      (error: any) => {
        console.error('Error fetching items:', error);
      }
    );
  }
  

  follow: boolean = false;

  toggleFollow() {
    this.follow = !this.follow;
  }
}
