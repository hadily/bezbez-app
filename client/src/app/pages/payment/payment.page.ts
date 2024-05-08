import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  items: any[] = [
    { item_id: 2, path: '../../../assets/images/item-1.jpeg', name: 'rouba', price: '20 DT', liked: false, quantity: 1 },
    { item_id: 2, path: '../../../assets/images/item-1.jpeg', name: 'Red shirt', price: '20 DT', liked: false, quantity: 2 },
  ];

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  checkout() {
    // Assuming you pass the user_id dynamically from your app
    const user_id = 68; // Update with the actual user ID
    const apiUrl = `http://localhost:8000/orders/process-cart/${user_id}/`;

    this.http.post(apiUrl, this.items).subscribe(
      (response: any) => {
        console.log('Checkout API Response:', response);
        // Handle success response here
      },
      (error: any) => {
        console.error('Error during checkout:', error);
        // Handle error response here
      }
    );
  }
}
