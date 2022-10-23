import { GET_PRODUCTS, ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, ADD_TO_CART, REMOVE_FROM_CART } from "./actions";
const initialState = {
    products: [],
    isLoading: true,
    wishlist: [],
    cart: [],
}
function productsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS:
            return { ...state, products: action.payload, isLoading: false };
        case ADD_TO_WISHLIST:
            return { ...state, wishlist: [...state.wishlist, action.payload] };
        case REMOVE_FROM_WISHLIST:
            return { ...state, wishlist: state.wishlist.filter((item) => item.id !== action.payload) };
        case ADD_TO_CART:
            return { ...state, cart: [...state.cart, action.payload] };
        case REMOVE_FROM_CART:
            return { ...state, cart: state.cart.filter((item) => item.id !== action.payload) };
        default:
            return state;
    }
}
export default productsReducer;