import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.page.html',
  styleUrls: ['./likes.page.scss'],
})
export class LikesPage implements OnInit {

  items: any[] = [
    { item_id: 2, path: '../../../assets/images/item-1.jpeg', name: 'Earrings', price: '20 DT', liked: true, quantity: 1 },
    { item_id: 2, path: '../../../assets/images/item-1.jpeg', name: 'Earrings', price: '20 DT', liked: true, quantity: 1 },
    { item_id: 2, path: '../../../assets/images/item-1.jpeg', name: 'Earrings', price: '20 DT', liked: true, quantity: 1 },
    { item_id: 2, path: '../../../assets/images/item-1.jpeg', name: 'Earrings', price: '20 DT', liked: true, quantity: 1 },
    { item_id: 2, path: '../../../assets/images/item-1.jpeg', name: 'Earrings', price: '20 DT', liked: true, quantity: 1 },
    { item_id: 2, path: '../../../assets/images/item-1.jpeg', name: 'Earrings', price: '20 DT', liked: true, quantity: 1 }
  ];

  constructor(private router: Router) { }

  @Output() refreshEvent = new EventEmitter<void>();

  ngOnInit() {}

  goBack() {
    const currentUrlTree = this.router.parseUrl(this.router.url);
    const segments = currentUrlTree.root.children['primary'].segments;
    const newUrl = segments.slice(0, -1).map(segment => segment.path).join('/');
    this.router.navigateByUrl(newUrl);
    this.refreshEvent.emit();
  }

  navigateTo(destination: string) {
    this.router.navigate([destination]);
  }

}
