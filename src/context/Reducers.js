const shopReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case 'CLEAR_CART':
      return {
        ...state,
        cart: [],
      };
    case 'INCREASE_ITEM_COUNT':
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload.id) {
            item.quantity += 1;
          }
          return item;
        }),
      };
    case 'DECREASE_ITEM_COUNT':
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload.id) {
            item.quantity -= 1;
          }
          return item;
        }),
      };
    default:
      return state;
  }
};

export { shopReducer };
