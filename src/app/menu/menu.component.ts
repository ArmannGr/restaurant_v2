import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuCategories = [
    {
      name: 'Pizzas',
      items: [
        { name: 'Margherita', description: 'Classic pizza with tomatoes and mozzarella', price: '$10' },
        { name: 'Pepperoni', description: 'Pepperoni and cheese', price: '$12' }
      ]
    },
    {
      name: 'Appetizers',
      items: [
        { name: 'Garlic Bread', description: 'Toasted bread with garlic and butter', price: '$5' },
        { name: 'Mozzarella Sticks', description: 'Fried mozzarella cheese sticks', price: '$7' }
      ]
    }
    // Add more categories and items as needed
  ];

  constructor() { }

  ngOnInit(): void { }
}
