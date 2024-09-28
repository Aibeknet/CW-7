import coffeeImage from './assets/coffee.png';
import friesImage from './assets/fries.png';
import cheeseburgerImage from './assets/cheeseburger.png';
import saladImage from './assets/salad.png';
import colaImage from './assets/cola.png';
import teaImage from './assets/tea.png';
import shaurmaImage from './assets/shaurma.png';
import hamburgerImage from './assets/hamburger.png';

export interface MenuItem {
    id: number;
    name: string;
    price: number;
    count: number;
    image: string;
}

export const initialMenu: MenuItem[] = [
    { id: 1, name: 'Hamburger', price: 180, image: hamburgerImage, count: 0 },
    { id: 2, name: 'Fries', price: 90, image: friesImage, count: 0 },
    { id: 3, name: 'Coffee', price: 30, image: coffeeImage, count: 0 },
    { id: 4, name: 'Cheeseburger', price: 200, image: cheeseburgerImage, count: 0 },
    { id: 5, name: 'Salad', price: 60, image: saladImage, count: 0 },
    { id: 6, name: 'Cola', price: 60, image: colaImage, count: 0 },
    { id: 7, name: 'tea', price: 20, image: teaImage,count: 0 },
    { id: 8, name: 'Shaurma', price: 200, image: shaurmaImage, count: 0 },
];