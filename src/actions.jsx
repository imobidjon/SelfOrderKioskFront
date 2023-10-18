import axios from "axios"
import { CATEGORY_LIST_FAIL, CATEGORY_LIST_REQUEST, CATEGORY_LIST_SUCCESS, ORDER_SET_TYPE, PAY_SET_METHOD } from "./constants"

export const setOrderType = (dispatch, orderType) => {
    return dispatch({
        type: ORDER_SET_TYPE,
        payload: orderType
    })
}

export const setPayMethod = (dispatch, payMethod) => {
    return dispatch({
        type: PAY_SET_METHOD,
        payload: payMethod
    })
}

export const setCategoryList = async (dispatch) => {
    dispatch({type: CATEGORY_LIST_REQUEST})
    try{
        const { data } = await axios.get('http://127.0.0.1:5000/api/categories')
        return dispatch({
            type: CATEGORY_LIST_SUCCESS,
            payload: data
        })
    }
    catch (error) {
        return dispatch({
            type: CATEGORY_LIST_FAIL,
            payload: error.message
        })
    }
}