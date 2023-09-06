import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { rootReducer } from './reducer';

const reducer = store => {
  console.log(store);
  return store;
};

const initialStore = {
  order: [
    {
      id: '1',
      categories: 'burger',
      favorite: 'true',
      name: 'Harlem Classic Burger',
      price: 5.99,
      quantity: 2,
      description:
        'Blend Pat la Frieda beef, homemade pickles, onions, and special sauce on a buttered and toasted Potato Roll with cheese.',
    },
    {
      id: '2',
      categories: 'burger',
      favorite: 'true',
      name: 'Hot Mess',
      price: 4.99,
      quantity: 1,
      description:
        'Classic, topped with hot mess  (pickled cherry pepper and bacon) relish, American cheese, and smoky chipotle mayo',
    },
  ],
  table: 1,
};

const enhancer = devToolsEnhancer();

export const store = createStore(reducer, initialStore, enhancer);
