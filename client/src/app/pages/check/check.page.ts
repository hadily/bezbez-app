import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

  bezbezes = [
    { path: '../../../assets/images/bezbez-1.jpeg', name: 'bezbez-name', speciality: 'speciality', follow: true },
    { path: '../../../assets/images/bezbez-1.jpeg', name: 'bezbez-name', speciality: 'speciality', follow: false },
    { path: '../../../assets/images/bezbez-1.jpeg', name: 'bezbez-name', speciality: 'speciality', follow: false },
    { path: '../../../assets/images/bezbez-1.jpeg', name: 'bezbez-name', speciality: 'speciality', follow: false },
    { path: '../../../assets/images/bezbez-1.jpeg', name: 'bezbez-name', speciality: 'speciality', follow: false },
    { path: '../../../assets/images/bezbez-1.jpeg', name: 'bezbez-name', speciality: 'speciality', follow: false }
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  navigateToAllItems() {
    this.router.navigate(['/all-items']);
  }

  navigateTo(destination: string) {
    this.router.navigate([destination]);
  }

}
