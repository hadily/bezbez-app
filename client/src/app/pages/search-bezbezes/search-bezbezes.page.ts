import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bezbezes',
  templateUrl: './search-bezbezes.page.html',
  styleUrls: ['./search-bezbezes.page.scss'],
})
export class SearchBezbezesPage implements OnInit {

  bezbezes = [
    { path: '../../../assets/images/bezbez-1.jpeg', name: 'bezbez-name', speciality: 'speciality', follow: true },
    { path: '../../../assets/images/bezbez-1.jpeg', name: 'bezbez-name', speciality: 'speciality', follow: false },
  ];

  constructor() { }

  ngOnInit() {
  }

}
