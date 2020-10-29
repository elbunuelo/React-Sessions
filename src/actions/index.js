import { actionTypes } from "../constants";

export const AddToCart = item => ({
  type: actionTypes.ADD_TO_CART,
  payload: { item }
});

export const DeleteFromCart = item => ({
  type: actionTypes.DELETE_FROM_CART,
  payload: { item }
});

export const ChangeAmount = (item, amount) => ({
  type: actionTypes.CHANGE_AMOUNT,
  payload: { item, amount }
});
