import { createReducer } from '@reduxjs/toolkit';
import {
  counterDecrement,
  counterIncrement,
  deleteOrder,
  placeOrder,
} from './menu-action.js';

const initialState = [
  {
    id: '1',
    categories: 'burger',
    favorite: 'true',
    name: 'Harlem Classic Burger',
    price: 5.99,
    quantity: 0,
    description:
      'Blend Pat la Frieda beef, homemade pickles, onions, and special sauce on a buttered and toasted Potato Roll with cheese.',
  },
  {
    id: '2',
    categories: 'burger',
    favorite: 'true',
    name: 'Hot Mess',
    price: '4.99',
    quantity: 0,
    description:
      'Classic, topped with hot mess  (pickled cherry pepper and bacon) relish, American cheese, and smoky chipotle mayo',
  },
  {
    id: '3',
    categories: 'burger',
    favorite: 'true',
    name: 'Impossible Jerk',
    price: '7.99',
    quantity: 0,
    description:
      'Two  beef patties, American cheese, pickles, and onions, topped with jerk fries and jerk mayo.',
  },
  {
    id: '4',
    categories: 'burger',
    favorite: 'false',
    name: 'Veggie Burger',
    price: '7.99',
    quantity: 0,
    description:
      'Heavenly pizzas: fresh ingredients, melted cheese, savory flavors.',
  },
  {
    id: '5',
    categories: 'burger',
    favorite: 'true',
    name: 'Harlem jerk',
    price: '8.99',
    quantity: 0,
    description:
      'Two patties of proprietary blend Pat La Frieda beef, American cheese, pickles, and onions, topped with jerk fries and jerk mayo.',
  },
  {
    id: '6',
    categories: 'burger',
    favorite: 'false',
    name: 'Chicken Sandwich',
    price: '10',
    quantity: 0,
    description: 'Juicy chicken breast topped with chedder cheese and bacon.',
  },
  {
    id: '7',
    categories: 'burger',
    favorite: 'false',
    name: 'THE KALBI BURGER',
    price: '15.00',
    quantity: 0,
    description:
      'Ground Marinated Short-Rib - Chuck - Brisket Blend, Gochujang & Sweet Pepper Remoulade, dill pickles on brioche.',
  },
  {
    id: '8',
    categories: 'burger',
    favorite: 'false',
    name: 'THE BEYOND BURGER',
    price: '16.00',
    quantity: 0,
    description:
      'Pico, avocado, fried jalapeno on a brioche bun (vegan)* On lettuce wrap*',
  },
  {
    id: '9',
    categories: 'burger',
    favorite: 'false',
    name: 'HARLEM STEAK SANDWICH',
    price: '18.00',
    quantity: 0,
    description:
      'Peppers, onions, cheddar cheese, lettuce, tomato, chipotle aioli',
  },
  {
    id: '10',
    categories: 'salads',
    favorite: 'true',
    name: 'Papaya at Somtum Der',
    price: '10.99',
    quantity: 0,
    description:
      'Som tum is the namesake dish of the eatery, a papaya salad made in several variations. Choose the Tum Thai Kai Kem.',
  },
  {
    id: '11',
    categories: 'salads',
    favorite: 'true',
    name: 'Caesar salad at Carbone',
    price: '9.99',
    quantity: 0,
    description:
      'Nuanced variation on the classic, amplified with warm garlic-bread croutons, anchovies and three types of cheese.',
  },
  {
    id: '12',
    categories: 'salads',
    favorite: 'true',
    name: 'Wedge salad ',
    price: '12.99',
    quantity: 0,
    description:
      'Good steakhouse wedge, with Iceberg dressed with blue-cheese dressing, chopped tomatoes and bacon crumbles.',
  },
  {
    id: '13',
    categories: 'salads',
    favorite: 'false',
    name: 'Roast carrot and avocado',
    price: '15.99',
    quantity: 0,
    description:
      'Sour cream dolloped onto avocado and roasted carrots, endives and sugar-snaps showered in vinegar and shaved Reggiano',
  },
  {
    id: '14',
    categories: 'salads',
    favorite: 'false',
    name: 'Asparagus cacio',
    price: '13.99',
    quantity: 0,
    description:
      'Roman cacio e pepe by subbing out pasta for asparagus in this fresh salad, tangled with Pecorino in a  vinaigrette',
  },
  {
    id: '15',
    categories: 'salads',
    favorite: 'false',
    name: 'CAESAR SALAD',
    price: '13.00',
    quantity: 0,
    description: 'Baby Romaine, Bacon, Anchovies, Parmesan, Croutons',
  },
  {
    id: '16',
    categories: 'salads',
    favorite: 'false',
    name: 'SPICY TEXAN COBB',
    price: '16.00',
    quantity: 0,
    description:
      'Mixed Greens, Chicken, Bacon, Apple, Tomato, Red Onion, Cucumber, Blue Cheese, Spicy Chipotle Ranch',
  },
  {
    id: '17',
    categories: 'pizza',
    favorite: 'true',
    name: 'Angry Nonna',
    price: '17.99',
    quantity: 0,
    description:
      'Hot Soppressata, aged mozzarella, Calabrian chili oil, hot honey—Round or Square (8 Slices)',
  },
  {
    id: '18',
    categories: 'pizza',
    favorite: 'true',
    name: 'Pepperoni',
    price: '7.99',
    quantity: 0,
    description: 'Aged mozzarella, fresh tomato sauce, pepperoni cups.',
  },
  {
    id: '19',
    categories: 'pizza',
    favorite: 'true',
    name: 'Pizza Upside Down',
    price: '13.99',
    quantity: 0,
    description:
      'Aged Mozzarella, Tomato Sauce, Grated Pecorino Romano, Extra Virgin Olive Oil-Square Only (8 Slices)',
  },
  {
    id: '20',
    categories: 'pizza',
    favorite: 'false',
    name: 'Pizza Vodka',
    price: '15.99',
    quantity: 0,
    description:
      'Vodka Sauce, Whipped Ricotta, Pecorino Romano—Square Only (8 Slices)',
  },
  {
    id: '21',
    categories: 'pizza',
    favorite: 'false',
    name: 'House Pie',
    price: '13.99',
    quantity: 0,
    description:
      'Aged mozarella, fresh tomato sauce, extra virgin olive oil, parmegianno reggiano, basil---Round or Square (8 Slices)',
  },
  {
    id: '22',
    categories: 'pizza',
    favorite: 'false',
    name: 'BUFFALO CHICKEN PIZZA',
    price: '15.00',
    quantity: 0,
    description:
      'Shredded Cheddar Jack Blend, House Buffalo, Diced Celery and Carrots, Bleu Cheese Crumbles, Ranch Dressing',
  },
  {
    id: '23',
    categories: 'bar',
    favorite: 'false',
    name: 'Corona Extra',
    price: '2',
    quantity: 0,
    description: '0.33L',
  },
  {
    id: '24',
    categories: 'bar',
    favorite: 'false',
    name: 'Rober Doms',
    price: '1.5',
    quantity: 0,
    description: '0.5L',
  },
  {
    id: '25',
    categories: 'bar',
    favorite: 'false',
    name: 'Somersby',
    price: '1.8',
    quantity: 0,
    description: 'blueberry, watermelon, apple   0.5L',
  },
  {
    id: '26',
    categories: 'bar',
    favorite: 'false',
    name: 'ESTRELLA DAMM',
    price: '3',
    quantity: 0,
    description: '0.4L',
  },
];

const menuReducer = createReducer(initialState, {
  [counterIncrement]: (state, { payload }) => {
    const findPlusObj = state.find(dish => dish.id === payload.id);
    const idxPlusObj = state.indexOf(findPlusObj);
    const newPlusState = [...state];
    newPlusState.splice(idxPlusObj, 1, payload);
    return [...newPlusState];
  },
  [counterDecrement]: (state, { payload }) => {
    const findMinusMenu = state.find(dish => dish.id === payload.id);
    const idxMinusMenu = state.indexOf(findMinusMenu);
    const newMinusMenuState = [...state];
    newMinusMenuState.splice(idxMinusMenu, 1, payload);

    return [...newMinusMenuState];
  },
  [deleteOrder]: (state, { payload }) => {
    const findDelObj = state.find(dish => dish.id === payload.id);
    const idxDelObj = state.indexOf(findDelObj);
    const newState = [...state];
    newState.splice(idxDelObj, 1, payload);

    return [...newState];
  },
  [placeOrder]: state => {
    const orderState = [];
    for (let item of state) {
      item = {
        ...item,
        quantity: 0,
      };
      orderState.push(item);
    }
    return [...orderState];
  },
});

// export const menuReducer = (state = initialState, {type, payload}) => {
//   switch (type) {
//     // case 'counter/plus':
//     //   const findPlusObj = state.find(dish => dish.id === payload.id);
//     //   const idxPlusObj = state.indexOf(findPlusObj);
//     //   const newPlusState = [...state];
//     //   newPlusState.splice(idxPlusObj, 1, payload);
//     //   return [...newPlusState];
//
//     case 'counter/minus':
//     // const findMinusMenu = state.find(dish => dish.id === payload.id);
//     // const idxMinusMenu = state.indexOf(findMinusMenu);
//     // const newMinusMenuState = [...state];
//     // newMinusMenuState.splice(idxMinusMenu, 1, payload);
//     //
//     // return [...newMinusMenuState];
//
//     // case 'order/delete':
//     //   const findDelObj = state.find(dish => dish.id === payload.id);
//     //   const idxDelObj = state.indexOf(findDelObj);
//     //   const newState = [...state];
//     //   newState.splice(idxDelObj, 1, payload);
//     //
//     //   return [...newState];
//     default:
//       return state;
//   }
// };

export default menuReducer;
