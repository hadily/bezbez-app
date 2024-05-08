import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  items: {  product_name: string, quantity: number, price: string }[] = [];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.fetchItems(); // Fetch items when the component initializes
  }

  fetchItems() {
    // Assuming you pass the user_id dynamically from your app
    const user_id = 68; // Update with the actual user ID

    this.http.get<any>('http://localhost:8000/orders/get-user-products/' + user_id).subscribe(
      (response: any) => {
        console.log('API Response:', response);

        if (response && response.user_products && Array.isArray(response.user_products)) {
          this.items = response.user_products.map((item: any) => ({
            // product_id: item.product_id,
            name: item.product_name,
            quantity: item.quantity,
            price: item.price + ' DT',
            // total_price: item.total_price,
          }));
        }
      },
      (error: any) => {
        console.error('Error fetching items:', error);
      }
    );
  }

  navigateTo(destination: string) {
    this.router.navigate([destination]);
  }

  increaseQuantity(item: any) {
    item.quantity++;
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }
}
