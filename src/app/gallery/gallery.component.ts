import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  images = [
    { src: 'assets/images/pizza1.jpg', alt: 'Pizza 1' },
    { src: 'assets/images/pizza2.jpg', alt: 'Pizza 2' },
    // Add more images
  ];

  constructor() { }

  ngOnInit(): void { }
}
