import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.page.html',
  styleUrls: ['./item-details.page.scss'],
})
export class ItemDetailsPage implements OnInit {

  @Output() refreshEvent = new EventEmitter<void>();

  constructor(private router: Router) { }

  ngOnInit() {}

  goBack() {
    const currentUrlTree = this.router.parseUrl(this.router.url);
    const segments = currentUrlTree.root.children['primary'].segments;
    const newUrl = segments.slice(0, -2).map(segment => segment.path).join('/');
    this.router.navigateByUrl(newUrl);
    this.refreshEvent.emit();
  }

  quantity: number = 1;

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

}
