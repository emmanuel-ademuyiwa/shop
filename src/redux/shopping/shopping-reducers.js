import actionTypes from "./shopping-types";

const INITIAL_STATE = {
    products: [
        {
            id: 1,
            title: '',
            price: ''
        },
        {
            id: 2,
            title: '',
            price: ''
        },
        {
            id: 3,
            title: '',
            price: ''
        },
        {
            id: 4,
            title: '',
            price: ''
        }
    ],  // {id, title, desc, price}
    cart: [], // {id, title, desc, price, qty}
    currentItem: null,
    address: false,
    delivery: false
}

export const shopReducer = (state = INITIAL_STATE, action) => { 
    switch (action.type) { 
        case actionTypes.ADD_TO_CART:
            // Get the Item data from the products
            // const item = state.products.filter(product => product.id === action.payload.id)
            // Check if the item is already in the cart
            const inCart = state.cart.find(item => item.id === action.payload.id ? true : false)
            return {
                ...state,
                cart: inCart ? state.cart.map(
                        item => item.id === action.payload.id ? 
                        {...item, qty: item.qty + 1} : 
                    item 
                ) : 
                [...state.cart, {...action.payload, qty: 1}]
            }
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id)
            }
        case actionTypes.INCREASE_ITEM:
            return {
                ...state,
                cart: state.cart.map(
                    item => item.id === action.payload.id ? 
                    {...item, qty: item.qty + 1} 
                    : 
                    item
                )
            }
        case actionTypes.DECREASE_ITEM:
            return {
                ...state,
                cart: state.cart.map(
                    item => item.id === action.payload.id ? 
                    {...item, qty: item.qty - 1} 
                    : 
                    item
                )
            }
        case actionTypes.ADJUST_QTY: 
            return {
                ...state,
                cart: state.cart.map(
                    item => item.id === action.payload.id ? 
                    {...item, qty: +action.payload.qty} 
                    : 
                    item
                )
            }
        case actionTypes.LOAD_CURRENT_ITEM:
            return {
                ...state,
                currentItem: action.payload
            }
        case actionTypes.CHECK_ADDRESS:
            return {
                ...state,
                address: true
            }
        case actionTypes.CHECK_DELIVERY:
            return {
                ...state,
                address: true,
                delivery: true
            }
        default:
            return state
    }
}


export default shopReducer;