import { Component } from '@angular/core';

interface MenuItem {
  number?: string;
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
  toggle?: boolean;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

// Klein 0.50, groß 1, Jumbo 1.5 , Blech 2
export class MenuComponent {
   pizzas = [
    {position: '1', name: 'Margherita', priceLittle: '4,00', price: '6,50', priceJumbo: '11,50', priceBig: '22,00', info: '' , nutrient: 'A'},
    {position: '2', name: 'Napoli', priceLittle: '5,50', price: '7,50', priceJumbo: '13,50', priceBig: '24,00', info: 'mit Sardellen und Oliven' , nutrient: 'A, C', allergen: '6'},
    {position: '3', name: 'Tonno', priceLittle: '5,50', price: '7,50', priceJumbo: '13,50', priceBig: '24,00', info: 'mit Thunfisch' , nutrient: 'A, C'},
    {position: '4', name: 'Funghi', priceLittle: '5,50', price: '7,50', priceJumbo: '13,50', priceBig: '24,00', info: 'mit Champignons' , nutrient: 'A'},
    {position: '4a', name: 'Kema', priceLittle: '6,00', price: '8,00', priceJumbo: '13,50', priceBig: '24,00', info: 'mit Champignons und Paprika' , nutrient: 'A'},
    {position: '5', name: 'Cipolla', priceLittle: '6,00', price: '7,50', priceJumbo: '13,50', priceBig: '24,00', info: 'mit Zwiebeln' , nutrient: 'A'},
    {position: '6', name: 'Diavolo', priceLittle: '6,50', price: '7,50', priceJumbo: '13,50', priceBig: '24,00', info: 'mit Paprika' , nutrient: 'A'},
    {position: '7', name: 'Salami', priceLittle: '5,50', price: '7,50', priceJumbo: '13,50', priceBig: '24,00', info: 'mit Salami' , nutrient: 'A', allergen: '1, 2, 5'},
    {position: '8', name: 'Prosciutto', priceLittle: '5,50', price: '7,50', priceJumbo: '13,50', priceBig: '24,00', info: 'mit Formfleisch-Vorderschinken' , nutrient: 'A', allergen: '2, 5'},
    {position: '9', name: 'Rustica', priceLittle: '6,00', price: '9,00', priceJumbo: '13,50', priceBig: '25,00', info: 'mit Formfleisch-Vorderschinken und Salami' , nutrient: 'A', allergen: '1, 2, 5'},
    {position: '9a', name: 'Sofia', priceLittle: '6,00', price: '8,50', priceJumbo: '14,00', priceBig: '25,00', info: 'mit Champignons und Formfleisch-Vorderschinken' , nutrient: 'A', allergen: '2, 5'},
    {position: '10', name: 'Bolognese', priceLittle: '5,50', price: '7,50', priceJumbo: '11,50', priceBig: '24,00', info: 'mit Hackfleischsauce' , nutrient: 'A'},
    {position: '11', name: 'Paesana', priceLittle: '6,00', price: '8,50', priceJumbo: '16,50', priceBig: '24,00', info: 'mit Zwiebeln und Champignons' , nutrient: 'A'},
    {position: '12', name: 'Primavera', priceLittle: '6,50', price: '9,00', priceJumbo: '15,50', priceBig: '26,00', info: 'mit Zwiebeln, Thunfisch, Champignons und Artischocken' , nutrient: 'A, C'},
    {position: '13', name: 'Bevitore', priceLittle: '6,50', price: '9,00', priceJumbo: '15,50', priceBig: '26,00', info: 'mit Thunfisch, Paprika, Oliven und Champignons' , nutrient: 'A, C', allergen: '6'},
    {position: '14', name: 'Quattro Stagioni', priceLittle: '6,50', price: '9,00', priceJumbo: '15,50', priceBig: '26,00', info: 'mit Salami, Formfleisch-Vorderschinken, Thunfisch und Champignons' , nutrient: 'A, C' , allergen: '1, 2, 5'},
    {position: '15', name: 'Frontiera', priceLittle: '6,00', price: '9,00', priceJumbo: '15,50', priceBig: '26,00', info: 'mit Salami, Formfleisch-Vorderschinken und Champignons' , nutrient: 'A', allergen: '1, 2, 5'},
    {position: '16', name: 'Capricciosa', priceLittle: '6,50', price: '9,00', priceJumbo: '15,50', priceBig: '27,00', info: 'mit Formfleisch-Vorderschinken, Thunfisch, Artischocken und Champignons' , nutrient: 'A, C', allergen: '2, 5'},
    {position: '17', name: 'Frutti di Mare', priceLittle: '7,00', price: '9,50', priceJumbo: '16,00', priceBig: '27,00', info: 'mit Meeresfrüchten' , nutrient: 'A, F, G'},
    {position: '18', name: 'Scampi', priceLittle: '7,00', price: '10,50', priceJumbo: '16,00', priceBig: '27,00', info: 'mit Crevetten' , nutrient: 'A, F'},
    {position: '19', name: 'Mais', priceLittle: '5,50', price: '7,50', priceJumbo: '13,50', priceBig: '24,00', info: 'mit Mais' , nutrient: 'A'},
    {position: '20', name: 'Calzone', priceLittle: '6,00', price: '', priceJumbo: '', priceBig: '', info: 'gefüllt mit Salami, Formfleisch-Vorderschinken und Champignons' , nutrient: 'A', allergen: '1, 2, 5'},
    {position: '21', name: 'Calz. Ringenberg', priceLittle: '7,00', price: '', priceJumbo: '', priceBig: '', info: 'gefüllt mit Salami, Formfleisch-Vorderschinken, Thunfisch und Ei' , nutrient: 'A, C, B', allergen: '1, 2, 5'},
    {position: '21a', name: 'Calz. Döner', priceLittle: '8,00', price: '', priceJumbo: '', priceBig: '', info: 'gefüllt mit Dönerfleisch, Zwiebeln, Peperoni' , nutrient: 'A', allergen: '1, 2, 5'},
    {position: '22', name: 'Tonno e Cipolla', priceLittle: '6,50', price: '9,00', priceJumbo: '15,50', priceBig: '26,00', info: 'mit Thunfisch und Zwiebeln' , nutrient: 'A, C'},
    {position: '23', name: 'Peperoni', priceLittle: '5,50', price: '7,00', priceJumbo: '12,50', priceBig: '24,00', info: 'mit scharfe und milde Peperoni' , nutrient: 'A'},
    {position: '24', name: 'Romana', priceLittle: '6,00', price: '9,00', priceJumbo: '13,50', priceBig: '26,00', info: 'mit Bolognese, Zwiebeln und Ei' , nutrient: 'A, B'},
    {position: '25', name: 'Hawaii', priceLittle: '6,50', price: '9,00', priceJumbo: '13,50', priceBig: '26,00', info: 'mit Formfleisch-Vorderschinken und Ananas' , nutrient: 'A', allergen: '2, 5'},
    {position: '26', name: 'Broccoli', priceLittle: '6,00', price: '8,00', priceJumbo: '13,50', priceBig: '24,00', info: 'mit Broccoli und Knoblauch' , nutrient: 'A'},
    {position: '26a', name: 'Hollandaise', priceLittle: '7,00', price: '9,50', priceJumbo: '15,50', priceBig: '27,00', info: 'mit Broccoli, Formfleisch-Vorderschinken, Sauce-Hollandaise' , nutrient: 'A', allergen: '2, 5'},
    {position: '27', name: 'Spaghetti', priceLittle: '6,50', price: '9,00', priceJumbo: '13,50', priceBig: '26,00', info: 'mit Bolognese und Spaghett' , nutrient: 'A'},
    {position: '28', name: 'Rustica Bolognese', priceLittle: '6,50', price: '9,00', priceJumbo: '15,50', priceBig: '21,00', info: 'mit Bolognese, Salami, Ei und Formfleisch-Vorderschinken' , nutrient: 'A, B', allergen: '1, 2, 5'},
    {position: '29', name: 'Mista', priceLittle: '7,00', price: '10,00', priceJumbo: '15,50', priceBig: '27,00', info: 'mit Salami, Formfleisch-Vorderschinken, Paprika, Champignons, Thunfisch und Zwiebeln' , nutrient: 'A, C', allergen: '1, 2, 5'},
    {position: '30', name: 'Rauli', priceLittle: '7,00', price: '10,00', priceJumbo: '15,50', priceBig: '27,00', info: 'mit Salami, Thunfisch, Formfleisch-Vorderschinken, Champignons, Zwiebeln, Peperoni und Bolognese' , nutrient: 'A, C', allergen: '1, 2, 5'},
    {position: '31', name: 'Popeye', priceLittle: '6,00', price: '7,50', priceJumbo: '13,50', priceBig: '24,00', info: 'mit Spinat und Knoblauch' , nutrient: 'A'},
    {position: '32', name: 'Braccio de Ferro', priceLittle: '6,50', price: '8,00', priceJumbo: '16,50', priceBig: '25,00', info: 'mit Spinat, Knoblauch und Ei' , nutrient: 'A, B'},
    {position: '33', name: 'Sucuk', priceLittle: '6,50', price: '9,00', priceJumbo: '16,50', priceBig: '26,00', info: 'mit Knoblauchwurst, Paprika, Peperoni und Zwiebeln' , nutrient: 'A'},
    {position: '34', name: 'Grewal', priceLittle: '6,50', price: '9,00', priceJumbo: '16,50', priceBig: '26,00', info: 'mit Champignons, Paprika, Zwiebeln, scharfe Peperoni und Knoblauch' , nutrient: 'A'},
    {position: '35', name: 'Con Mozzarella', priceLittle: '5,50', price: '8,00', priceJumbo: '13,50', priceBig: '24,00', info: 'mit Mozzarella' , nutrient: 'A, D'},
    {position: '36', name: 'Quattro Formaggi', priceLittle: '7,00', price: '10,00', priceJumbo: '15,50', priceBig: '27,00', info: 'mit Gouda, Gorgonzola, Schafskäse und Mozzarella' , nutrient: 'A, D', allergen: '1'},
    {position: '37', name: 'Ringo', priceLittle: '6,50', price: '9,00', priceJumbo: '13,50', priceBig: '25,00', info: 'mit Salami, grünen Bohnen, und Formfleisch-Vorderschinken' , nutrient: 'A', allergen: '1, 2, 5'},
    {position: '38', name: 'Sarina', priceLittle: '7,00', price: '10,00', priceJumbo: '16,50', priceBig: '27,00', info: 'mit Thunfisch, Spinat, Crevetten und Knoblauch' , nutrient: 'A, C, F'},
    {position: '39', name: 'Speciale', priceLittle: '7,00', price: '10,00', priceJumbo: '16,50', priceBig: '27,00', info: 'mit Lachs, Mozzarella und Knoblauch' , nutrient: 'A, F, D'},
    {position: '40', name: 'Della Casa', priceLittle: '6,50', price: '9,00', priceJumbo: '14,50', priceBig: '26,00', info: 'mit Thunfisch, Artischocken, scharfe Peperoni und Knoblauch' , nutrient: 'A, C'},
    {position: '41', name: 'Pecorino', priceLittle: '6,50', price: '9,00', priceJumbo: '15,50', priceBig: '26,00', info: 'mit frischen Tomaten, Schafskäse und scharfe Peperoni' , nutrient: 'A, D'},
    {position: '42', name: 'Gorgonzola', priceLittle: '6,50', price: '9,00', priceJumbo: '15,50', priceBig: '26,00', info: 'mit Formfleisch-Vorderschinken und Gorgonzola' , nutrient: 'A, D', allergen: '2, 5'},
    {position: '43', name: 'Vegetaria', priceLittle: '7,00', price: '10,00', priceJumbo: '15,50', priceBig: '27,00', info: 'mit Broccoli, Champignons, Paprika und Spinat' , nutrient: 'A, D'},
    {position: '44', name: 'Tom.-Mozzarella', priceLittle: '6,50', price: '9,50', priceJumbo: '16,00', priceBig: '27,00', info: 'mit frischen Tomaten, Mozzarella und Rucola' , nutrient: 'A, D'},
    {position: '45', name: 'Gyros', priceLittle: '7,00', price: '10,00', priceJumbo: '16,50', priceBig: '27,00', info: 'mit Schweinefleisch, Zwiebeln und Tzatziki' , nutrient: 'A'},
    {position: '45a', name: 'Chicken', priceLittle: '7,00', price: '10,00', priceJumbo: '15,50', priceBig: '27,00', info: 'mit Hähnchenfleisch und Zwiebeln' , nutrient: 'A'},
    {position: '45b', name: 'New York', priceLittle: '7,00', price: '10,00', priceJumbo: '16,50', priceBig: '28,00', info: 'mit Broccoli, Hähnchenbrust und Sauce-Hollandaise' , nutrient: 'A, B, D, H'},
    {position: '46', name: 'Döner', priceLittle: '7,00', price: '9,00', priceJumbo: '14,50', priceBig: '25,00', info: 'mit Dönerfleisch und Sauce-Hollandaise' , nutrient: 'A, B, D, H'},
    {position: '46a', name: 'Döner Spezial', priceLittle: '7,00', price: '10,00', priceJumbo: '16,50', priceBig: '27,00', info: 'mit Dönerfleisch, Champignons, Paprika und Zwiebeln' , nutrient: 'A'},
    {position: '46b', name: 'Döner Pita', priceLittle: '7,00', price: '9,50', priceJumbo: '15,50', priceBig: '26,00', info: 'mit Dönerfleisch, Zwiebeln und Sauce-Hollandaise' , nutrient: 'A, B, D, H'}
  ];
  salads = [
    {position: '47', name: 'Insalata Mista', price: '5,50', info: 'gemischter Salat mit Mais' , nutrient: ''},
    {position: '48', name: 'Insalata Mista', price: '5,00', info: 'gemischter Salat mit Zwiebeln' , nutrient: ''},
    {position: '50', name: 'Insalata Di Pomodori', price: '5,50', info: 'Tomalensalat mit Zwiebeln und Essig-Öl' , nutrient: ''},
    {position: '51', name: 'Insalata Di Cetrioli', price: '5,00', info: 'Gurkensalat' , nutrient: ''},
    {position: '52', name: 'Insalata Pute', price: '6,50', info: 'gemischter Salat mit Putenfleisch' , nutrient: ''},
    {position: '52a', name: 'Insalata Pute Spezial', price: '7,50', info: 'gemischter Salat mit Putenfleisch, Käse, Ei und Peperoni' , nutrient: 'D, B', allergen: '1'},
    {position: '52b', name: 'Insalata Chicken', price: '7,50', info: 'gemischter Salat mit Hähnchenstreifen, Schafskäse, Oliven, Peperoni, Mais und Ei' , nutrient: 'D, B', allergen: '6'},
    {position: '53', name: 'Insalata Nicoise', price: '6,50', info: 'gemischter Salat mit Zwiebeln, Thunfisch und Ei' , nutrient: 'C, B'},
    {position: '54', name: 'Insalata Pomodori-Schafskäse', price: '6,50', info: 'mit Tomaten, Schafskäse, Zwiebeln und Essig-Öl' , nutrient: 'D'},
    {position: '56', name: 'Insalata Capricciosa', price: '8,00', info: 'gemischter Salat mit Salami, Formileisch-Vorderschinken, Zwiebeln, Käse, Ei und Thunfisch' , nutrient: 'B, C, D', allergen: '1, 2, 5'},
    {position: '57', name: 'Insalata Paesana', price: '7,00', info: 'gemischter Salat mit Thunfisch, grünen Bohnen, Zwiebeln und Essig-Öl' , nutrient: 'C'},
    {position: '58', name: 'Insalata Americana', price: '7,50', info: 'gemischter Salat mit Crevetten, Ananas und Cocktailsauce' , nutrient: 'F', allergen: '1, 5'},
    {position: '58a', name: 'Insalata Hawaii', price: '7,00', info: 'gemischter Salat mit Formfleisch-Vorderchinken, Ananas und Cocktailsauce' , nutrient: '', allergen: '1, 2, 5'},
    {position: '59', name: 'Insalata Mondiale', price: '7,00', info: 'gemischter Salat mit Formfleisch-Vorderschinken, Zwiebeln und Käse' , nutrient: 'D', allergen: '1, 2, 5'},
    {position: '60', name: 'Insalata Ringenberg', price: '8,00', info: 'gemischter Salat mit Formfleisch-Vorderschinken, Käse, Crevetten grünen Bohnen und Zwiebeln' , nutrient: 'D, F', allergen: '1, 2, 5'},
    {position: '61', name: 'Insalata Pomodori-Mozzarella', price: '6,50', info: 'mit Mozzarella", Tomaten, Zwiebeln und Essig-Öl' , nutrient: 'D'},
    {position: '61a', name: 'Insalata Italia', price: '7,50', info: 'mit grünem Salat, Tomaten, Gurken, Oliven, Ei, Formfleisch-Vorderschinken, Schafskäse, Artischocken und Zwiebeln' , nutrient: 'B, D', allergen: '2, 5, 6'},
  ];
  antipasta = [
    {position: '64', name: 'Verdura al Forno', price: '7,50', info: 'Champignons, Broccoli, Spinat, Knoblauch, Sahnesauce und Käse überbacken' , nutrient: 'D', allergen: '1'},
  ];
  spaghetti = [
    {position: '75', name: 'Spaghetti alla Napoletana', price: '6,00', info: 'mit Tomatensauce' , nutrient: 'A'},
    {position: '76', name: 'Spaghetti Bolognese', price: '7,00', info: 'mit Hackfleischsauce' , nutrient: 'A'},
    {position: '76a', name: 'Spaghetti Bolognese al Forno', price: '7,50', info: 'mit Hackfleischsauce und Käse überbacken' , nutrient: 'A, D', allergen: '1'},
    {position: '76b', name: 'Spaghetti Broccoli al Forno', price: '7,50', info: 'mit Broccoli, scharfen Peperoni, Knoblauch, Hackfleischsauce und Käse überbacken' , nutrient: 'A, D', allergen: '1'},
    {position: '78', name: 'Spaghetti Scampi', price: '8,50', info: 'mit Crevetten, Knoblauch und Tomatensauce' , nutrient: 'A, F'},
    {position: '79', name: 'Spaghetti alla Diavolo', price: '7,50', info: 'mit Formfleisch-Vorderschinken, Paprika, Crevetten und Tomatensauce' , nutrient: 'A, F', allergen: '2, 5'},
    {position: '80', name: 'Spaghetti Carbonara', price: '7,50', info: 'mit Formfleisch-Vorderschinken, Ei und Käse-Sahnesauce' , nutrient: 'A, B, D', allergen: '1, 2, 5'},
    {position: '82', name: 'Spaghetti Dello Cheff', price: '8,50', info: 'mit Champignons, Formfleisch-Vorderschinken und Hackfleisch-Sahnesauce' , nutrient: 'A, D', allergen: '2, 5'},
    {position: '83', name: 'Spaghetti Frutti di Mare', price: '8,00', info: 'mit Meeresfrüchten, Knoblauch und Tomatensauce' , nutrient: 'A, F, G'},
  ];
  maccheroni = [
    {position: '84', name: 'Makkaroni Bolognese', price: '7,00', info: 'mit Tomatensauce' , nutrient: 'A'},
    {position: '84a', name: 'Makkaroni Bolognese al Forno', price: '7,50', info: 'mit Hackfleischsauce' , nutrient: 'A'},
    {position: '84b', name: 'Makkaroni Carbonara', price: '7,00', info: 'mit Hackfleischsauce und Käse überbacken' , nutrient: 'A, D', allergen: '1'},
    {position: '84c', name: 'Makkaroni Broccoli al Forno', price: '8,00', info: 'mit Broccoli, scharfen Peperoni, Knoblauch, Hackfleischsauce und Käse überbacken' , nutrient: 'A, D', allergen: '1'},
    {position: '85', name: 'Makkaroni Con Mozzarella al Forno', price: '8,50', info: 'mit Crevetten, Knoblauch und Tomatensauce' , nutrient: 'A, F'},
    {position: '86', name: 'Makkaroni Quattro Formaggi', price: '8,00', info: 'mit Formfleisch-Vorderschinken, Paprika, Crevetten und Tomatensauce' , nutrient: 'A, F', allergen: '2, 5'},
    {position: '87', name: 'Makkaroni Gratinati al Forno', price: '8,00', info: 'mit Formfleisch-Vorderschinken, Ei und Käse-Sahnesauce' , nutrient: 'A, B, D', allergen: '1, 2, 5'},
    {position: '88', name: 'Makkaroni all Rudolfo', price: '8,00', info: 'mit Champignons, Formfleisch-Vorderschinken und Hackfleisch-Sahnesauce' , nutrient: 'A, D', allergen: '2, 5'},
    {position: '90', name: 'Makkaroni Spinaci', price: '8,50', info: 'mit Meeresfrüchten, Knoblauch und Tomatensauce' , nutrient: 'A, F, G'},
    {position: '90a', name: 'Makkaroni Spinaci e Salmone', price: '9,00', info: 'mit Meeresfrüchten, Knoblauch und Tomatensauce' , nutrient: 'A, F, G'},
  ];
  torrellini = [
    {position: '92', name: 'Tortellini Bolognese', price: '7,50', info: 'mit Hackfleischsauce' , nutrient: 'A', allergen: '2'},
    {position: '93', name: 'Tortellini alla Chef', price: '7,50', info: 'mit Formfleisch-Vorderschinken und Sahnesauce' , nutrient: 'A, D', allergen: '2, 5'},
    {position: '95', name: 'Tortellini al Forno', price: '8,50', info: 'mit Formfleisch-Vorderschinken, Salami, Tomatensauce und Käse überbacken' , nutrient: 'A, D', allergen: '1, 2, 5'},
    {position: '96', name: 'Tortellini Quattro Formaggi', price: '8,50', info: 'mit Gorgonzola, Käse, Erbsen und Sahnesauce' , nutrient: 'A, D', allergen: '1, 2'},
    {position: '97', name: 'Pasta Mista alla Panna', price: '8,00', info: 'verschiedene Nudeln mit Erbsen, Champignons und Sahnesauce' , nutrient: 'A, D', allergen: '2'},
    {position: '98', name: 'Pasta Mista al Forno', price: '8,00', info: 'verschiedene Nudeln mit Erbsen, Champignons, Tomatensauce und Käse" überbacken' , nutrient: 'A, D', allergen: '1, 2'},
    {position: '98a', name: 'Verschiedene Nudeln', price: '8,00', info: 'mit Hackfleischsauce und Käse überbacken' , nutrient: 'A, D', allergen: '2, 1'},
  ];
  tagliatelle = [
    {position: '99', name: 'Tagliatelle alla Bolognese', price: '7,00', info: 'mit Hackfleischsauce' , nutrient: 'A'},
    {position: '99a', name: 'Tagliatelle Frontera', price: '8,00', info: 'mit Formfleisch-Vorderschinken, Salami, Champignons, Hackfleischsauce und Käse überbacken' , nutrient: 'A, D',  allergen: '1, 2, 5'},
    {position: '100', name: 'Tagliatelle Mozzarella al Forno', price: '7,50', info: 'mit Tomatensauce und Mozzarella überbacken' , nutrient: 'A, D'},
    {position: '101', name: 'Tagliatelle alla Chef', price: '7,50', info: 'mit Formfleisch-Vorderschinken Erbsen und Sahnesauce' , nutrient: 'A, D', allergen: '2, 5'},
    {position: '102', name: 'Tagliatelle Don Alfredo', price: '8,00', info: 'mit Champignons, Zwiebeln, Crevetten, Formfleisch-Vorderschinkenchinken Knoblauch und Tomaten-Sahnesauce' , nutrient: 'A, D', allergen: '2, 5'},
    {position: '103', name: 'Tagliatelle Paglia e Forno a. Chef', price: '7,50', info: 'grüne und weiße Bandnudeln mit Formfleisch-Vorderschinken, Champignons und Sahnesauce' , nutrient: 'A, D',  allergen: '2, 5'},
    {position: '104', name: 'Lasagne', price: '7,50', info: '' , nutrient: 'A'},
    {position: '105', name: 'Tagliatelle alla Salmone', price: '8,00', info: 'mit Lachs und Sahnesauce' , nutrient: 'A, C, D'},
  ];
  pasta_chicken = [
    {position: 'H01', name: 'Spaghetti Chicken', price: '8,50', info: 'mit Hähnchenbrust, Champignons, Zwiebeln und Tomatensauce' , nutrient: 'A'},
    {position: 'H02', name: 'Spaghetti Chicken Spezial', price: '8,50', info: 'mit Hähnchenbrust, Champignons und Sahnesauce' , nutrient: 'A, D'},
    {position: 'H03', name: 'Makkaroni Chicken', price: '8,50', info: 'mit Hähnchenbrust, Zwiebeln, Tomatensauce und Käse überbacken' , nutrient: 'A, 1, D'},
    {position: 'H04', name: 'Makkaroni Chicken Spezial', price: '8,50', info: 'mit Hähnchenbrust, Broccoli, Rahmsauce und Käse überbacken' , nutrient: 'A, 1, D'},
    {position: 'H05', name: 'Tagliatelle Chicken', price: '8,50', info: 'mit Hähnchenbrust, Champignons, Tomatensauce und Käse überbacken' , nutrient: 'A, 1, D'},
  ];
  baguette = [
    {position: '109', name: 'Sonja', price: '6,00', info: 'mit Thunfisch und Ei' , nutrient: 'A, B, C'},
    {position: '111', name: 'Miriam', price: '6,00', info: 'mit Formfleisch-Vorderschinken und Tomaten' , nutrient: 'A', allergen: '2, 5'},
    {position: '115', name: 'Sarah', price: '6,00', info: 'mit Salami, Tomaten und Ei' , nutrient: 'A, B', allergen: '1, 2, 5'},
    {position: '116', name: 'Spezial', price: '6,00', info: 'mit Formfleisch-Vorderschinken oder Salami, Thunfisch und Ei' , nutrient: 'A, B, C', allergen: '1, 2, 5'},
    {position: '118', name: 'Rustica', price: '7,00', info: 'mit Schweinefleisch und Zwiebeln' , nutrient: 'A'},
    {position: '118a', name: 'Pollo', price: '7,00', info: 'mit Hähnchenfleisch' , nutrient: 'A'},
  ];
  pork_schnitzel = [
    {position: '120', name: 'Schnitzel Milanese', price: '8,50', info: 'paniertes Schnitzel' , nutrient: 'A'},
  ];
  chicken_schnitzel = [
    {position: '176', name: 'Hähnchenbrustfilet', price: '8,00', info: 'paniert mit Jägersauce' , nutrient: 'A, E, H', allergen: '1, 2, 7'},
  ];
  finger_food = [
    {position: '143a', name: 'Chicken Nuggets', price: '6,50', info: '10 Stück mit Pommes' , nutrient: 'A'},
    {position: '143b', name: 'Chicken Wings', price: '5,00', info: '6 Stück' , nutrient: ''},
    {position: '144', name: 'Onion Rings', price: '5,00', info: '6 Stück' , nutrient: 'A'},
    {position: '145', name: 'Mozzarella Sticks', price: '5,00', info: '6 Stück' , nutrient: 'A, D'},
  ];
  wraps = [
    {position: '153', name: 'Wrap', price: '5,50', info: 'mit Tunfisch' , nutrient: 'A, C'},
    {position: '154', name: 'Wrap', price: '5,50', info: 'mit Hähnchen' , nutrient: 'A'},
    {position: '155', name: 'Wrap', price: '5,50', info: 'mit Tomaten und Mozzarella' , nutrient: 'A, D'},
  ];
  indian = [
    {position: '160a', name: 'Chili Paneer', price: '10,50', info: 'mit Paprika, Zwiebeln, Curry, hausgemachtem Käse, Ingwer und Knoblauch (scharf)' , nutrient: 'D'},
    {position: '161', name: 'Soja Curry', price: '10,00', info: 'Sojabohnen-Bällchen mit Kartoffeln und Currysauce' , nutrient: ''},
    {position: '164', name: 'Vegetable Biryani', price: '10,00', info: 'Reis mit verschiedenem Gemüse' , nutrient: ''},
    {position: '164a', name: 'Shahi Chane', price: '10,50', info: 'hausgemachter Käse mit Ingwer, Joghurt und Knoblauch (pikant gewürzt)' , nutrient: 'D'},
    {position: '177', name: 'Chicken Curry', price: '10,50', info: 'Hühnerfleisch in feiner Currysauce' , nutrient: ''},
    {position: '178', name: 'Indischer Korma', price: '10,50', info: 'Hühnerfleisch mit Curry und Kokus-Sauce' , nutrient: ''},
    {position: '179', name: 'Chicken Punjab Spezial', price: '10,00', info: 'Hühnerfleisch mit Zwiebeln, Knoblauch, Ingwer, Chili, Tomatensauce (scharf)' , nutrient: ''},
    {position: '181', name: 'Chicken Biryani', price: '11,00', info: 'Hähnchenfleisch mit gemischtem Gemüse' , nutrient: ''},
  ];
  side_dishes = [
    {position: '', name: 'Pommes', price: '3,00', info: '' , nutrient: ''},
    {position: '', name: 'Kroketten', price: '3,00', info: '' , nutrient: ''},
    {position: '', name: 'Salat-Mayonnaise, Ketchup', price: '1,00', info: '' , nutrient: ''},
    {position: '', name: 'Tzatziki', price: '1,00', info: '' , nutrient: ''},
  ];
  pizza_bun = [
    {position: 'O6', name: 'gefüllte Pizzabrötchen', price: '5,00', info: 'mit Tunfisch' , nutrient: 'A, C'},
    {position: 'O7', name: 'gefüllte Pizzabrötchen', price: '5,00', info: 'mit Spinat' , nutrient: 'A'},
    {position: 'O8', name: 'gefüllte Pizzabrötchen', price: '5,00', info: 'mit Formfleisch-Vorderschinken und Ananas' , nutrient: 'A', allergen: '2, 5'},
    {position: 'O9', name: 'gefüllte Pizzabrötchen', price: '5,50', info: 'mit Gyros' , nutrient: 'A, H, I'},
    {position: 'O10', name: 'Pizzabrötchen', price: '2,50', info: '6 Stück mit hausgemachter Kräutercreme' , nutrient: 'A'},
    {position: 'O11', name: 'Knoblauchbrot', price: '2,50', info: 'mit Kräutercreme' , nutrient: 'A'},
    {position: 'O12', name: 'Naan', price: '3,00', info: 'indisches Brot' , nutrient: 'A'},
    {position: '', name: 'Kräutercreme extra', price: '1,00', info: '' , nutrient: ''}
  ];
  drinks = [
    {position: '', name: 'Cola, Fanta', price: '2,50', info: '1l Flasche' , nutrient: '', allergen: '1, 5, 9'},
    {position: '', name: 'Cola, Fanta', price: '2,00', info: '0.33l Flasche' , nutrient: '', allergen: '1, 5, 9'},
    {position: '', name: 'Mineralwasser', price: '1,50', info: '0.75l Flasche' , nutrient: ''},
    {position: '', name: 'Pils', price: '2,50', info: '0.5l Flasche' , nutrient: 'A'},
    {position: '', name: 'Lambrusco', price: '5,00', info: '0.75l Flasche' , nutrient: 'A'},
  ];



  menuCategories: MenuCategory[] = [
    {
      name: 'Pizza',
      items: this.pizzas.map(pizza => ({
        number: pizza.position,
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
      toggle: false
    },
    {
      name: 'Salate',
      items: this.salads.map(salad => ({
        number: salad.position,
        name: salad.name,
        description: salad.info,
        sizes: [
          { name: 'normal', price: `€${salad.price.replace(',', '.')}` }
        ],
        nutrients: salad.nutrient,
        allergens: salad.allergen,
        toggle: false
    })),
  },
  {
    name: 'Antipasta',
    items: this.antipasta.map(antipasta => ({
      number: antipasta.position,
      name: antipasta.name,
      description: antipasta.info,
      sizes: [
        { name: 'normal', price: `€${antipasta.price.replace(',', '.')}` }
      ],
      nutrients: antipasta.nutrient,
      allergens: antipasta.allergen,
      toggle: false
  })),
  },
  {
    name: 'Spaghetti',
    items: this.spaghetti.map(spaghetti => ({
      number: spaghetti.position,
      name: spaghetti.name,
      description: spaghetti.info,
      sizes: [
        { name: 'normal', price: `€${spaghetti.price.replace(',', '.')}` }
      ],
      nutrients: spaghetti.nutrient,
      allergens: spaghetti.allergen,
      toggle: false
  })),
  },
  {
    name: 'Makkaroni',
    items: this.maccheroni.map(maccheroni => ({
      number: maccheroni.position,
      name: maccheroni.name,
      description: maccheroni.info,
      sizes: [
        { name: 'normal', price: `€${maccheroni.price.replace(',', '.')}` }
      ],
      nutrients: maccheroni.nutrient,
      allergens: maccheroni.allergen,
      toggle: false
  })),
  },
  {
    name: 'Tortellini',
    items: this.torrellini.map(torrellini => ({
      number: torrellini.position,
      name: torrellini.name,
      description: torrellini.info,
      sizes: [
        { name: 'normal', price: `€${torrellini.price.replace(',', '.')}` }
      ],
      nutrients: torrellini.nutrient,
      allergens: torrellini.allergen,
      toggle: false
  })),
  },
  {
    name: 'Tagliatelle',
    items: this.tagliatelle.map(tagliatelle => ({
      number: tagliatelle.position,
      name: tagliatelle.name,
      description: tagliatelle.info,
      sizes: [
        { name: 'normal', price: `€${tagliatelle.price.replace(',', '.')}` }
      ],
      nutrients: tagliatelle.nutrient,
      allergens: tagliatelle.allergen,
      toggle: false
  })),
  },
  {
    name: 'Nudelgerichte mit Hähnchenfleisch',
    items: this.pasta_chicken.map(pasta_chicken => ({
      number: pasta_chicken.position,
      name: pasta_chicken.name,
      description: pasta_chicken.info,
      sizes: [
        { name: 'normal', price: `€${pasta_chicken.price.replace(',', '.')}` }
      ],
      nutrients: pasta_chicken.nutrient,
      toggle: false
  })),
  },
  {
    name: 'Baguettes',
    items: this.baguette.map(baguette => ({
      number: baguette.position,
      name: baguette.name,
      description: baguette.info,
      sizes: [
        { name: 'normal', price: `€${baguette.price.replace(',', '.')}` }
      ],
      nutrients: baguette.nutrient,
      allergens: baguette.allergen,
      toggle: false
  })),
  },
  {
    name: 'Schweineschnitzel',
    items: this.pork_schnitzel.map(schnitzel => ({
      number: schnitzel.position,
      name: schnitzel.name,
      description: schnitzel.info,
      sizes: [
        { name: 'normal', price: `€${schnitzel.price.replace(',', '.')}` }
      ],
      nutrients: schnitzel.nutrient,
      toggle: false
  })),
  },
  {
    name: 'Hähnchenbrustfilet',
    items: this.chicken_schnitzel.map(chicken_breast => ({
      number: chicken_breast.position,
      name: chicken_breast.name,
      description: chicken_breast.info,
      sizes: [
        { name: 'normal', price: `€${chicken_breast.price.replace(',', '.')}` }
      ],
      nutrients: chicken_breast.nutrient,
      toggle: false
  })),
  },
  {
    name: 'Fingerfood',
    items: this.finger_food.map(finger_food => ({
      number: finger_food.position,
      name: finger_food.name,
      description: finger_food.info,
      sizes: [
        { name: 'normal', price: `€${finger_food.price.replace(',', '.')}` }
      ],
      nutrients: finger_food.nutrient,
      toggle: false
  })),
  },
  {
    name: 'Wraps',
    items: this.wraps.map(wraps => ({
      number: wraps.position,
      name: wraps.name,
      description: wraps.info,
      sizes: [
        { name: 'normal', price: `€${wraps.price.replace(',', '.')}` }
      ],
      nutrients: wraps.nutrient,
      toggle: false
  })),
  },
  {
    name: 'Indische Spezialitäten',
    items: this.indian.map(indian => ({
      number: indian.position,
      name: indian.name,
      description: indian.info,
      sizes: [
        { name: 'normal', price: `€${indian.price.replace(',', '.')}` }
      ],
      nutrients: indian.nutrient,
      toggle: false
  })),
  },
  {
    name: 'Imbiss',
    items: this.side_dishes.map(side_dishes => ({
      number: side_dishes.position,
      name: side_dishes.name,
      description: side_dishes.info,
      sizes: [
        { name: 'normal', price: `€${side_dishes.price.replace(',', '.')}` }
      ],
      nutrients: side_dishes.nutrient,
      toggle: false
  })),
  },
  {
    name: 'Pizzabrötchen und Brot',
    items: this.pizza_bun.map(pizza_bun => ({
      number: pizza_bun.position,
      name: pizza_bun.name,
      description: pizza_bun.info,
      sizes: [
        { name: 'normal', price: `€${pizza_bun.price.replace(',', '.')}` }
      ],
      nutrients: pizza_bun.nutrient,
      toggle: false
  })),
  },
  {
    name: 'Getränke',
    items: this.drinks.map(drinks => ({
      number: drinks.position,
      name: drinks.name,
      description: drinks.info,
      sizes: [
        { name: 'normal', price: `€${drinks.price.replace(',', '.')}` }
      ],
      nutrients: drinks.nutrient,
      toggle: false
  })),
  }
  ];

  togglePanel(type: string) {
    this.menuCategories.forEach(category => {
      if (category.name === type) {
        category.toggle = !category.toggle;
      }
    });
  }
}
