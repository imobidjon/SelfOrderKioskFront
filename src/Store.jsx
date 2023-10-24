import React, { createContext, useReducer } from "react";
import {
  CATEGORY_LIST_FAIL,
  CATEGORY_LIST_REQUEST,
  CATEGORY_LIST_SUCCESS,
  ORDER_ADD_ITEM,
  ORDER_CLEAR,
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_LIST_FAIL,
  ORDER_LIST_REQUEST,
  ORDER_LIST_SUCCESS,
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
  SelectedProduct: { selected: {} },
  orderList: { loading: true },
  order: {
    orderType: "Eat In",
    payMethod: "Cash",
    orderItems: [],
  },
  orderCreate: { loading: true },
};

function reducer(state, action) {
  switch (action.type) {
    case SELECTED_PRODUCT:
      return {
        ...state,
        SelectedProduct: { selected: action.payload },
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
    case ORDER_CLEAR:
      return {
        ...state,
        order: {
          SelectedProduct: {},
          orderItems: [],
          totalPrice: 0,
          itemsCount: 0,
        },
      };

    case ORDER_CREATE_REQUEST:
      return { ...state, orderCreate: { loading: true } };
    case ORDER_CREATE_SUCCESS:
      return {
        ...state,
        orderCreate: { loading: false, newOrder: action.payload },
      };
    case ORDER_CREATE_FAIL:
      return {
        ...state,
        orderCreate: { loading: false, error: action.payload },
      };

    case ORDER_LIST_REQUEST:
      return { ...state, orderList: { loading: true } };
    case ORDER_LIST_SUCCESS:
      return {
        ...state,
        orderList: { loading: false, orders: action.payload },
      };
    case ORDER_LIST_FAIL:
      return {
        ...state,
        orderList: { loading: false, error: action.payload },
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
