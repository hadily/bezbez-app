import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-p1',
  templateUrl: './home-p1.page.html',
  styleUrls: ['./home-p1.page.scss'],
})
export class HomeP1Page {

  constructor(private router: Router) { }

  navigateToP2() {
    this.router.navigate(['home', 'p2']);
  }

  navigateToP3() {
    this.router.navigate(['home', 'p3']);
  }

}
