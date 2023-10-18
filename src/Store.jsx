import React, { createContext, useReducer } from "react";
import {
    CATEGORY_LIST_FAIL,
  CATEGORY_LIST_REQUEST,
  CATEGORY_LIST_SUCCESS,
  ORDER_SET_TYPE,
  PAY_SET_METHOD,
} from "./constants";

export const Store = createContext();

const initialState = {
  CategoryList: { loading: true },
  order: {
    orderType: "Eat In",
    payMethod: "Cash",
  },
};

function reducer(state, action) {
  switch (action.type) {
    case CATEGORY_LIST_REQUEST:
      return {
        ...state,
        CategoryList: { loading: true },
      };
    case CATEGORY_LIST_SUCCESS:
      return {
        ...state,
        CategoryList: { loading: false, categories: action.payload },
      };
    case CATEGORY_LIST_FAIL:
      return {
        ...state,
        CategoryList: { loading: false, error: action.payload },
      };
    case ORDER_SET_TYPE:
      return {
        ...state,
        order: { ...state.order, orderType: action.payload },
      };
    case PAY_SET_METHOD:
      return {
        ...state,
        order: { ...state.order, payMethod: action.payload },
      };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
