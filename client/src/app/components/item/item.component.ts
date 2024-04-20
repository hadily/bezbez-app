import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent  implements OnInit {
  @Input() item: any;

  constructor(private router: Router) {}

  navigateToItemDetails(itemId: number) {
    this.router.navigate(['/item-details', itemId]);
  }

  ngOnInit() {}

}
