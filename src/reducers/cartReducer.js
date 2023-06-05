const initialState = {
  items: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // Add the new item to the cart
      return {
        ...state,
        items: action.payload,
      };

    // case 'REMOVE_FROM_CART':
    //   // Filter out all items with the specified id
    //   return {
    //     ...state,
    //     items: state.items.filter((item) => item.id !== action.payload.id),
    //   };

    case 'REMOVE_FROM_CART':
  return {
    ...state,
    items: action.payload,
  };

case 'INCREMENT_QUANTITY':
      const { itemId, cartItems } = action.payload;
      const updatedItems = state.items.map(item => {
        if (item.id === itemId) {
          return {
            ...item,
            count: item.count + 1
          };
        }
        return item;
      });
      return {
        ...state,
        items: updatedItems
      };


    case 'CLEAR_CART':
      // Clear all items from the cart
      return {
        ...state,
        items: [],
      };

    default:
      return state;
  }
};

export default cartReducer;