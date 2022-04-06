import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  navList = [
    { name: 'Home', link: 'home' },
    { name: 'About', link: 'about' },
    { name: 'Product', link: 'products' },
    { name: 'Gallery', link: 'gallery' },
    { name: 'Contact Us', link: '' },
    { name: 'Manage Users', link: 'users' },
    { name: 'Promise', link: 'promise' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
