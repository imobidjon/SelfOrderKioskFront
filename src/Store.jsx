import React, { createContext, useReducer } from "react";
import {
  CATEGORY_LIST_FAIL,
  CATEGORY_LIST_REQUEST,
  CATEGORY_LIST_SUCCESS,
  ORDER_ADD_ITEM,
  ORDER_SET_TYPE,
  PAY_SET_METHOD,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  REMOVE_FROM_ORDER,
  SELECTED_PRODUCT,
} from "./constants";

export const Store = createContext();

const initialState = {
  ProductList: { loading: true },
  CategoryList: { loading: true },
  order: {
    orderType: "Eat In",
    payMethod: "Cash",
    SelectedProduct: {},
    orderItems: [],
  },
};

function reducer(state, action) {
  switch (action.type) {
    case SELECTED_PRODUCT:
      return {
        ...state,
        order: { ...state.order, SelectedProduct: action.payload },
      };
    case PRODUCT_LIST_REQUEST:
      return {
        ...state,
        ProductList: { loading: true },
      };
    case PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        ProductList: { loading: false, products: action.payload },
      };
    case PRODUCT_LIST_FAIL:
      return {
        ...state,
        ProductList: { loading: false, error: action.payload },
      };
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
    case ORDER_ADD_ITEM: {
      const item = action.payload;
      const existItem = state.order.orderItems.find(
        (x) => x.name === item.name
      );
      const orderItems = existItem
        ? state.order.orderItems.map((x) =>
            x.name === existItem.name ? item : x
          )
        : [...state.order.orderItems, item];

      const itemsCount = orderItems.reduce((a, c) => a + c.quantity, 0);
      const totalPrice = orderItems.reduce(
        (a, c) => a + c.quantity * c.price,
        0
      );

      return {
        ...state,
        order: {
          ...state.order,
          orderItems,
          itemsCount,
          totalPrice,
        },
      };
    }
    case REMOVE_FROM_ORDER: {
      const orderItems = state.order.orderItems.filter(
        (x) => x.name !== action.payload.name
      );

      const itemsCount = orderItems.reduce((a, c) => a + c.quantity, 0);
      const totalPrice = orderItems.reduce(
        (a, c) => a + c.quantity * c.price,
        0
      );

      return {
        ...state,
        order: {
          ...state.order,
          orderItems,
          itemsCount,
          totalPrice,
        },
      };
    }
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
