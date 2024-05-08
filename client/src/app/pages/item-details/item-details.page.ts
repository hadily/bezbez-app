import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.page.html',
  styleUrls: ['./item-details.page.scss'],
})
export class ItemDetailsPage implements OnInit {
  selectedItem: any;
  quantity: number = 1;
  inCart: boolean = false;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {  
    const itemId = this.router.routerState.snapshot.url.split('/').pop();
    if (itemId) {
      this.getItemById(itemId);
    }
  }

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
  toggleCart() {
    const requestData = {
      quantity: this.quantity,
      
    };
    console.log(requestData);
    const apiUrl = `http://127.0.0.1:8000/orders/add-to-cart/68/${this.selectedItem.id}/${this.quantity}`;
    
  
   
  
    this.http.post(apiUrl, requestData).subscribe(
      (response: any) => {
        console.log('Add to Cart API Response:', response);
  
        if (response.status === 'success') {
          this.inCart = true;
        } else {
          console.error('Failed to add item to cart.');
        }
      },
      (error: any) => {
        console.error('Error adding item to cart:', error);
      }
    );
  }
  

  getItemById(itemId: string) {
    const apiUrl = `http://127.0.0.1:8000/shop/products/${itemId}`;

    this.http.get<any>(apiUrl).subscribe(
      (response: any) => {
        console.log('Item API Response:', response);

        if (response) {
          this.selectedItem = response;
        } else {
          console.error('Item not found.');
        }
      },
      (error: any) => {
        console.error('Error fetching item:', error);
      }
    );
  }
}
