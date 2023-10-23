import axios from "axios";
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

export const setOrderType = (dispatch, orderType) => {
  return dispatch({
    type: ORDER_SET_TYPE,
    payload: orderType,
  });
};

export const setPayMethod = (dispatch, payMethod) => {
  return dispatch({
    type: PAY_SET_METHOD,
    payload: payMethod,
  });
};

export const setCategoryList = async (dispatch) => {
  dispatch({ type: CATEGORY_LIST_REQUEST });
  try {
    const { data } = await axios.get(
      "http://192.168.0.109:5000/api/categories"
    );
    return dispatch({
      type: CATEGORY_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    return dispatch({
      type: CATEGORY_LIST_FAIL,
      payload: error.message,
    });
  }
};

export const setProductList = async (dispatch, categoryName = "") => {
  dispatch({ type: PRODUCT_LIST_REQUEST });
  try {
    const { data } = await axios.get(`http://192.168.0.109:5000/api/products?category=${categoryName}`);
    return dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    return dispatch({
      type: PRODUCT_LIST_FAIL,
      payload: error.message,
    });
  }
};

export const setSelectedProduct = async (dispatch, selectedProduct) => {
  return dispatch({
    type: SELECTED_PRODUCT,
    payload: selectedProduct,
  });
};

export const addToOrder = async (dispatch, item) => {
  return dispatch({
    type: ORDER_ADD_ITEM,
    payload: item,
  });
};

export const removeFromOrder = async (dispatch, item) => {
  return dispatch({
    type: REMOVE_FROM_ORDER,
    payload: item,
  });
};
