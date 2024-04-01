import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-p2',
  templateUrl: './home-p2.page.html',
  styleUrls: ['./home-p2.page.scss'],
})
export class HomeP2Page {

  constructor(private router: Router) { }

  navigateToP3() {
    this.router.navigate(['home', 'p3']);
  }

}
