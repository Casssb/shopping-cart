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
        cart: state.cart.filter((item) => item.name !== action.payload.name),
      };
    case 'CHANGE_ITEM_QUANTITY':
      return {
        ...state,
        cart: state.cart.filter((item) =>
          item.name === action.payload.name
            ? (item.quantity = action.payload.quantity)
            : item.quantity
        ),
      };
    default:
      return state;
  }
};

export { shopReducer };
