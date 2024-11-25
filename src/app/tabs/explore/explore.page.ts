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
  ];
  constructor() {}

  ngOnInit() {}
}
