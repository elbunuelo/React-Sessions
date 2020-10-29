import { actionTypes } from "../constants";

const initialState = {
  cart: {},
  items: [
    {
      id: 1,
      name: "Large Coffee",
      unitPrice: 1.75
    },
    {
      id: 2,
      name: "Small Latte",
      unitPrice: 3.98
    },
    {
      id: 3,
      name: "Cream Cheese Bagel",
      unitPrice: 4.0
    },
    {
      id: 4,
      name: "Iced Coffee",
      unitPrice: 1.5
    },
    {
      id: 5,
      name: "Grilled Cheese Sandwich",
      unitPrice: 6.25
    }
  ]
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.ADD_TO_CART: {
      const { item } = payload;
      const cart = { ...state.cart };

      if (!cart[item.id]) {
        cart[item.id] = {
          item,
          amount: 0
        };
      }
      cart[item.id].amount += 1;

      return {
        ...state,
        cart
      };
    }
    case actionTypes.CHANGE_AMOUNT: {
      const { item, amount } = payload;
      const cart = { ...state.cart };

      if (amount > 0) {
        cart[item.id].amount = amount;
      } else {
        delete cart[item.id];
      }

      return {
        ...state,
        cart
      };
    }
    case actionTypes.DELETE_FROM_CART: {
      const { item } = payload;
      const cart = { ...state.cart };
      delete cart[item.id];

      return {
        ...state,
        cart
      };
    }

    default:
      return state;
  }
};

export default reducer;
