import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  reviews = [
    { name: 'John Doe', text: 'Great pizza, amazing atmosphere!' },
    { name: 'Jane Smith', text: 'Best pizza in town. Will definitely come back!' }
    // Add more reviews
  ];

  constructor() { }

  ngOnInit(): void { }
}
