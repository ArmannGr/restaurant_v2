import { Component } from '@angular/core';

interface MenuItem {
  number: number | string;
  name: string;
  description: string;
  price?: string;
  sizes?: { name: string; price: string; }[];
  nutrients?: string;
  allergens?: string;
}

interface MenuCategory {
  name: string;
  items: MenuItem[];
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
   pizzas = [
    {position: '1', name: 'Margherita', priceLittle: '3,50', price: '5,50', priceJumbo: '10,00', priceBig: '20,00', info: '' , nutrient: 'A'},
    {position: '2', name: 'Napoli', priceLittle: '5,00', price: '6,50', priceJumbo: '12,00', priceBig: '22,00', info: 'mit Sardellen und Oliven' , nutrient: 'A, C', allergen: '6'},
    {position: '3', name: 'Tonno', priceLittle: '5,00', price: '6,50', priceJumbo: '12,00', priceBig: '22,00', info: 'mit Thunfisch' , nutrient: 'A, C'},
    {position: '4', name: 'Funghi', priceLittle: '5,00', price: '6,50', priceJumbo: '12,00', priceBig: '22,00', info: 'mit Champignons' , nutrient: 'A'},
    {position: '4a', name: 'Kema', priceLittle: '5,50', price: '7,00', priceJumbo: '12,00', priceBig: '22,00', info: 'mit Champignons und Paprika' , nutrient: 'A'},
    {position: '5', name: 'Cipolla', priceLittle: '5,50', price: '6,50', priceJumbo: '12,00', priceBig: '22,00', info: 'mit Zwiebeln' , nutrient: 'A'},
    {position: '6', name: 'Diavolo', priceLittle: '5,00', price: '6,50', priceJumbo: '12,00', priceBig: '22,00', info: 'mit Paprika' , nutrient: 'A'},
    {position: '7', name: 'Salami', priceLittle: '5,00', price: '6,50', priceJumbo: '12,00', priceBig: '22,00', info: 'mit Salami' , nutrient: 'A', allergen: '1, 2, 5'},
    {position: '8', name: 'Prosciutto', priceLittle: '5,00', price: '6,50', priceJumbo: '12,00', priceBig: '22,00', info: 'mit Formfleisch-Vorderschinken' , nutrient: 'A', allergen: '2, 5'},
    {position: '9', name: 'Rustica', priceLittle: '5,50', price: '9,00', priceJumbo: '12,00', priceBig: '23,00', info: 'mit Formfleisch-Vorderschinken und Salami' , nutrient: 'A', allergen: '1, 2, 5'},
    {position: '9a', name: 'Sofia', priceLittle: '5,50', price: '7,50', priceJumbo: '12,50', priceBig: '23,00', info: 'mit Champignons und Formfleisch-Vorderschinken' , nutrient: 'A', allergen: '2, 5'},
    {position: '10', name: 'Bolognese', priceLittle: '5,00', price: '6,50', priceJumbo: '10,00', priceBig: '22,00', info: 'mit Hackfleischsauce' , nutrient: 'A'},
    {position: '11', name: 'Paesana', priceLittle: '5,50', price: '7,50', priceJumbo: '15,00', priceBig: '22,00', info: 'mit Zwiebeln und Champignons' , nutrient: 'A'},
    {position: '12', name: 'Primavera', priceLittle: '6,00', price: '8,00', priceJumbo: '14,00', priceBig: '24,00', info: 'mit Zwiebeln, Thunfisch, Champignons und Artischocken' , nutrient: 'A, C'},
    {position: '13', name: 'Bevitore', priceLittle: '6,00', price: '8,00', priceJumbo: '14,00', priceBig: '24,00', info: 'mit Thunfisch, Paprika, Oliven und Champignons' , nutrient: 'A, C', allergen: '6'},
    {position: '14', name: 'Quattro Stagioni', priceLittle: '6,00', price: '8,00', priceJumbo: '14,00', priceBig: '24,00', info: 'mit Salami, Formfleisch-Vorderschinken, Thunfisch und Champignons' , nutrient: 'A, C' , allergen: '1, 2, 5'},
    {position: '15', name: 'Frontiera', priceLittle: '5,50', price: '8,00', priceJumbo: '14,00', priceBig: '24,00', info: 'mit Salami, Formfleisch-Vorderschinken und Champignons' , nutrient: 'A', allergen: '1, 2, 5'},
    {position: '16', name: 'Capricciosa', priceLittle: '6,00', price: '8,00', priceJumbo: '14,00', priceBig: '25,00', info: 'mit Formfleisch-Vorderschinken, Thunfisch, Artischocken und Champignons' , nutrient: 'A, C', allergen: '2, 5'},
    {position: '17', name: 'Frutti di Mare', priceLittle: '6,50', price: '8,50', priceJumbo: '14,00', priceBig: '25,00', info: 'mit Meeresfrüchten' , nutrient: 'A, F, G'},
    {position: '18', name: 'Scampi', priceLittle: '6,50', price: '9,50', priceJumbo: '14,00', priceBig: '25,00', info: 'mit Crevetten' , nutrient: 'A, F'},
    {position: '19', name: 'Mais', priceLittle: '5,00', price: '6,50', priceJumbo: '12,00', priceBig: '22,00', info: 'mit Mais' , nutrient: 'A'},
    {position: '20', name: 'Calzone', priceLittle: '5,50', price: '', priceJumbo: '', priceBig: '', info: 'gefüllt mit Salami, Formfleisch-Vorderschinken und Champignons' , nutrient: 'A', allergen: '1, 2, 5'},
    {position: '21', name: 'Calz. Ringenberg', priceLittle: '6,50', price: '', priceJumbo: '', priceBig: '', info: 'gefüllt mit Salami, Formfleisch-Vorderschinken, Thunfisch und Ei' , nutrient: 'A, C, B', allergen: '1, 2, 5'},
    {position: '21a', name: 'Calz. Döner', priceLittle: '7,50', price: '', priceJumbo: '', priceBig: '', info: 'gefüllt mit Dönerfleisch, Zwiebeln, Peperoni' , nutrient: 'A', allergen: '1, 2, 5'},
    {position: '22', name: 'Tonno e Cipolla', priceLittle: '6,00', price: '8,00', priceJumbo: '14,00', priceBig: '24,00', info: 'mit Thunfisch und Zwiebeln' , nutrient: 'A, C'},
    {position: '23', name: 'Peperoni', priceLittle: '5,00', price: '6,00', priceJumbo: '11,00', priceBig: '22,00', info: 'mit scharfe und milde Peperoni' , nutrient: 'A'},
    {position: '24', name: 'Romana', priceLittle: '5,50', price: '8,00', priceJumbo: '12,00', priceBig: '24,00', info: 'mit Bolognese, Zwiebeln und Ei' , nutrient: 'A, B'},
    {position: '25', name: 'Hawaii', priceLittle: '6,00', price: '8,00', priceJumbo: '12,00', priceBig: '24,00', info: 'mit Formfleisch-Vorderschinken und Ananas' , nutrient: 'A', allergen: '2, 5'},
    {position: '26', name: 'Broccoli', priceLittle: '5,50', price: '7,00', priceJumbo: '12,00', priceBig: '22,00', info: 'mit Broccoli und Knoblauch' , nutrient: 'A'},
    {position: '26a', name: 'Hollandaise', priceLittle: '6,50', price: '8,50', priceJumbo: '14,00', priceBig: '25,00', info: 'mit Broccoli, Formfleisch-Vorderschinken, Sauce-Hollandaise' , nutrient: 'A', allergen: '2, 5'},
    {position: '27', name: 'Spaghetti', priceLittle: '6,00', price: '8,00', priceJumbo: '12,00', priceBig: '24,00', info: 'mit Bolognese und Spaghett' , nutrient: 'A'},
    {position: '28', name: 'Rustica Bolognese', priceLittle: '6,00', price: '8,00', priceJumbo: '24,00', priceBig: '19,00', info: 'mit Bolognese, Salami, Ei und Formfleisch-Vorderschinken' , nutrient: 'A, B', allergen: '1, 2, 5'},
    {position: '29', name: 'Mista', priceLittle: '6,50', price: '9,00', priceJumbo: '14,00', priceBig: '25,00', info: 'mit Salami, Formfleisch-Vorderschinken, Paprika, Champignons, Thunfisch und Zwiebeln' , nutrient: 'A, C', allergen: '1, 2, 5'},
    {position: '30', name: 'Rauli', priceLittle: '6,50', price: '9,00', priceJumbo: '14,00', priceBig: '25,00', info: 'mit Salami, Thunfisch, Formfleisch-Vorderschinken, Champignons, Zwiebeln, Peperoni und Bolognese' , nutrient: 'A, C', allergen: '1, 2, 5'},
    {position: '31', name: 'Popeye', priceLittle: '5,50', price: '6,50', priceJumbo: '12,00', priceBig: '22,00', info: 'mit Spinat und Knoblauch' , nutrient: 'A'},
    {position: '32', name: 'Braccio de Ferro', priceLittle: '6,00', price: '7,00', priceJumbo: '15,00', priceBig: '23,00', info: 'mit Spinat, Knoblauch und Ei' , nutrient: 'A, B'},
    {position: '33', name: 'Sucuk', priceLittle: '6,00', price: '8,00', priceJumbo: '15,00', priceBig: '24,00', info: 'mit Knoblauchwurst, Paprika, Peperoni und Zwiebeln' , nutrient: 'A'},
    {position: '34', name: 'Grewal', priceLittle: '6,00', price: '8,00', priceJumbo: '15,00', priceBig: '24,00', info: 'mit Champignons, Paprika, Zwiebeln, scharfe Peperoni und Knoblauch' , nutrient: 'A'},
    {position: '35', name: 'Con Mozzarella', priceLittle: '5,00', price: '7,00', priceJumbo: '12,00', priceBig: '22,00', info: 'mit Mozzarella' , nutrient: 'A, D'},
    {position: '36', name: 'Quattro Formaggi', priceLittle: '6,50', price: '9,00', priceJumbo: '14,00', priceBig: '25,00', info: 'mit Gouda, Gorgonzola, Schafskäse und Mozzarella' , nutrient: 'A, D', allergen: '1'},
    {position: '37', name: 'Ringo', priceLittle: '6,00', price: '8,00', priceJumbo: '12,00', priceBig: '23,00', info: 'mit Salami, grünen Bohnen, und Formfleisch-Vorderschinken' , nutrient: 'A', allergen: '1, 2, 5'},
    {position: '38', name: 'Sarina', priceLittle: '6,50', price: '9,00', priceJumbo: '15,00', priceBig: '25,00', info: 'mit Thunfisch, Spinat, Crevetten und Knoblauch' , nutrient: 'A, C, F'},
    {position: '39', name: 'Speciale', priceLittle: '6,50', price: '9,00', priceJumbo: '15,00', priceBig: '25,00', info: 'mit Lachs, Mozzarella und Knoblauch' , nutrient: 'A, F, D'},
    {position: '40', name: 'Della Casa', priceLittle: '6,00', price: '8,00', priceJumbo: '13,00', priceBig: '24,00', info: 'mit Thunfisch, Artischocken, scharfe Peperoni und Knoblauch' , nutrient: 'A, C'},
    {position: '41', name: 'Pecorino', priceLittle: '6,00', price: '8,00', priceJumbo: '14,00', priceBig: '24,00', info: 'mit frischen Tomaten, Schafskäse und scharfe Peperoni' , nutrient: 'A, D'},
    {position: '42', name: 'Gorgonzola', priceLittle: '6,00', price: '8,00', priceJumbo: '14,00', priceBig: '24,00', info: 'mit Formfleisch-Vorderschinken und Gorgonzola' , nutrient: 'A, D', allergen: '2, 5'},
    {position: '43', name: 'Vegetaria', priceLittle: '6,50', price: '9,50', priceJumbo: '14,00', priceBig: '25,00', info: 'mit Broccoli, Champignons, Paprika und Spinat' , nutrient: 'A, D'},
    {position: '44', name: 'Tom.-Mozzarella', priceLittle: '6,00', price: '8,50', priceJumbo: '14,50', priceBig: '25,00', info: 'mit frischen Tomaten, Mozzarella und Rucola' , nutrient: 'A, D'},
    {position: '45', name: 'Gyros', priceLittle: '6,50', price: '9,00', priceJumbo: '15,00', priceBig: '25,00', info: 'mit Schweinefleisch, Zwiebeln und Tzatziki' , nutrient: 'A'},
    {position: '45a', name: 'Chicken', priceLittle: '6,50', price: '9,00', priceJumbo: '14,00', priceBig: '25,00', info: 'mit Hähnchenfleisch und Zwiebeln' , nutrient: 'A'},
    {position: '45b', name: 'New York', priceLittle: '6,50', price: '9,00', priceJumbo: '15,00', priceBig: '26,00', info: 'mit Broccoli, Hähnchenbrust und Sauce-Hollandaise' , nutrient: 'A, B, D, H'},
    {position: '46', name: 'Döner', priceLittle: '6,50', price: '8,00', priceJumbo: '13,00', priceBig: '23,00', info: 'mit Dönerfleisch und Sauce-Hollandaise' , nutrient: 'A, B, D, H'},
    {position: '46a', name: 'Döner Spezial', priceLittle: '6,50', price: '9,00', priceJumbo: '15,00', priceBig: '25,00', info: 'mit Dönerfleisch, Champignons, Paprika und Zwiebeln' , nutrient: 'A'},
    {position: '46b', name: 'Döner Pita', priceLittle: '6,50', price: '8,50', priceJumbo: '14,00', priceBig: '24,00', info: 'mit Dönerfleisch, Zwiebeln und Sauce-Hollandaise' , nutrient: 'A, B, D, H'}
  ];
  salads = [
    {position: '47', name: 'Insalata Mista', price: '5,00', info: 'gemischter Salat mit Mais' , nutrient: ''},
    {position: '48', name: 'Insalata Mista', price: '4,50', info: 'gemischter Salat mit Zwiebeln' , nutrient: ''},
    {position: '50', name: 'Insalata Di Pomodori', price: '5,00', info: 'Tomalensalat mit Zwiebeln und Essig-Öl' , nutrient: ''},
    {position: '51', name: 'Insalata Di Cetrioli', price: '4,50', info: 'Gurkensalat' , nutrient: ''},
    {position: '52', name: 'Insalata Pute', price: '6,00', info: 'gemischter Salat mit Putenfleisch' , nutrient: ''},
    {position: '52a', name: 'Insalata Pute Spezial', price: '7,00', info: 'gemischter Salat mit Putenfleisch, Käse, Ei und Peperoni' , nutrient: 'D, B', allergen: '1'},
    {position: '52b', name: 'Insalata Chicken', price: '7,00', info: 'gemischter Salat mit Hähnchenstreifen, Schafskäse, Oliven, Peperoni, Mais und Ei' , nutrient: 'D, 6, B'},
    {position: '53', name: 'Insalata Nicoise', price: '6,00', info: 'gemischter Salat mit Zwiebeln, Thunfisch und Ei' , nutrient: 'C, B'},
    {position: '54', name: 'Insalata Pomodori-Schafskäse', price: '6,00', info: 'mit Tomaten, Schafskäse, Zwiebeln und Essig-Öl' , nutrient: 'D'},
    {position: '56', name: 'Insalata Capricciosa', price: '7,50', info: 'gemischter Salat mit Salami, Formileisch-Vorderschinken, Zwiebeln, Käse, Ei und Thunfisch' , nutrient: '1, 2, 5, B, C, D'},
    {position: '57', name: 'Insalata Paesana', price: '6,50', info: 'gemischter Salat mit Thunfisch, grünen Bohnen, Zwiebeln und Essig-Öl' , nutrient: 'C'},
    {position: '58', name: 'Insalata Americana', price: '7,00', info: 'gemischter Salat mit Crevetten, Ananas und Cocktailsauce' , nutrient: '1, 5, F'},
    {position: '58a', name: 'Insalata Hawaii', price: '6,50', info: 'gemischter Salat mit Formfleisch-Vorderchinken, Ananas und Cocktailsauce' , nutrient: '1, 2, 5'},
    {position: '59', name: 'Insalata Mondiale', price: '6,50', info: 'gemischter Salat mit Formfleisch-Vorderschinken, Zwiebeln und Käse' , nutrient: '1, 2, 5, D'},
    {position: '60', name: 'Insalata Ringenberg', price: '7,50', info: 'gemischter Salat mit Formfleisch-Vorderschinken, Käse, Crevetten grünen Bohnen und Zwiebeln' , nutrient: '1, 2, 5, D, F'},
    {position: '61', name: 'Insalata Pomodori-Mozzarella', price: '6,00', info: 'mit Mozzarella", Tomaten, Zwiebeln und Essig-Öl' , nutrient: 'D'},
    {position: '61a', name: 'Insalata Italia', price: '7,00', info: 'mit grünem Salat, Tomaten, Gurken, Oliven, Ei, Formfleisch-Vorderschinken, Schafskäse, Artischocken und Zwiebeln' , nutrient: '2, 5, 6, B, D'},
  ];

  menuCategories: MenuCategory[] = [
    {
      name: 'Pizza',
      items: this.pizzas.map(pizza => ({
        number: parseInt(pizza.position),
        name: pizza.name,
        description: pizza.info,
        sizes: [
          { name: 'Klein', price: `€${pizza.priceLittle.replace(',', '.')}` },
          { name: 'Groß', price: `€${pizza.price.replace(',', '.')}` },
          { name: 'Jumbo', price: `€${pizza.priceJumbo.replace(',', '.')}` },
          { name: 'Blech', price: `€${pizza.priceBig.replace(',', '.')}` }
        ],
        nutrients: pizza.nutrient,
        allergens: pizza.allergen,
      })),
    },
    {
      name: 'Salate',
      items: this.salads.map(salad => ({
        number: parseInt(salad.position),
        name: salad.name,
        description: salad.info,
        sizes: [
          { name: 'normal', price: `€${salad.price.replace(',', '.')}` }
        ],
        nutrients: salad.nutrient,
        allergens: salad.allergen,
    })),
  },
    

      
  ];
}
