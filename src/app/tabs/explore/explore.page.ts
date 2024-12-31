import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})
export class ExplorePage implements OnInit {
  slides = [
    { url: '/assets/images/egle.jpg', title: 'eagle' },
    { url: '/assets/images/Dashboard.jpg', title: 'dashboard' },
    { url: '/assets/images/15.jpg', title: 'forest' },
    { url: '/assets/images/10.jpg', title: 'city' },
    { url: '/assets/images/8.jpg', title: 'italy' },
    { url: '/assets/images/seet1.jpg', title: 'seet1' },
    { url: '/assets/images/seet2.jpg', title: 'seet2' },
    { url: '/assets/images/1.jpg', title: 'forest1' },
    { url: '/assets/images/4.jpg', title: 'forest4' },
    { url: '/assets/images/6.jpg', title: 'forest6' },
    { url: '/assets/images/18.jpg', title: 'forest18' },
    { url: '/assets/images/2.jpg', title: 'forest2' },
  ];
  constructor() {}


  ngOnInit() {}
}
