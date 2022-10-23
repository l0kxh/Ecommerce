import axios from "axios";
import { useSelector } from "react-redux";
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_WISHLIST = 'GET_WISHLIST'
export const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST'
export const REMOVE_FROM_WISHLIST = 'REMOVE_FROM_WISHLIST'
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'



export const getProducts = () => {
    try {
        return async dispatch => {
            const res = await axios.get('https://api.escuelajs.co/api/v1/products');
            if (res.data) {
                dispatch({
                    type: GET_PRODUCTS,
                    payload: res.data,
                });
            }
            else {
                console.log('Unable to fetch');
            }
        }
    }
    catch (error) {
        console.log(error);
    }
}

export const addToWishList = product => dispatch=>{
    dispatch({
        type: 'ADD_TO_WISHLIST',
        payload : product,
    })
}

export const removeFromWishList = product => dispatch => {
    dispatch({
        type: 'REMOVE_FROM_WISHLIST',
        payload : product,
    })
}

export const addToCart = product => dispatch => {
    dispatch({
        type: 'ADD_TO_CART',
        payload : product,
    })
}

export const removeFromCart = product => dispatch => {
    dispatch({
        type: 'REMOVE_FROM_CART',
        payload : product,
    })
}