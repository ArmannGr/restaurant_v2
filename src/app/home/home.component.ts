import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  reviews = [
    {
      author_name: 'Veselin Kolev',
      text: 'Super Essen! Die Besitzer sind super freundlich und gehen auf jeden Kundenwunsch ein. Die Portionen sind perfekt. ...',
      rating: '5/5'
    },
    {
      author_name: 'Stefan Sobolewski',
      text: 'Auch wenn es recht unscheinbar wirkt, das Essen ist sehr zu empfehlen. Indisch  authentisch gegessen, gute Schärfe, sehr gute Beilagen. ...',
      rating: '5/5'
    },
    {
      author_name: 'Thomas Imhof',
      text: 'Erst etwas skeptisch, da der Italiener doch recht nach Indien aussieht. Aber Pizza war gut. ...',
      rating: '4/5'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}