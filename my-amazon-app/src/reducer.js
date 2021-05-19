export const initialState = {
  basket: [],
  user: null,
};

// Selector
export const getBasketTotal = (basket) => basket?.reduce((total, item) => total + item.price, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET": {
      return { ...state, basket: [...state.basket, action.item] };
    }
    case "REMOVE_FROM_BASKET": {
      const indexToRemove = state.basket.findIndex((item) => item.id === action.id);
      const updatedBasket = [...state.basket];
      updatedBasket.splice(indexToRemove, 1);
      return { ...state, basket: updatedBasket };
    }
    case "EMPTY_BASKET": {
      return { ...state, basket: [] };
    }
    case "SET_USER": {
      return { ...state, user: action.user };
    }
    case "RESET_USER": {
      return { ...state, user: null };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
