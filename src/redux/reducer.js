const initialState = {
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

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'counter/plus':
      const findObj = state.find(dish => dish.id === action.payload.id);
      return console.log(findObj);
  }
};
