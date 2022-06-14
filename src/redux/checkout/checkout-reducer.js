import { actionTypes } from "../theme/theme-types";

const initialState = {
    address: false,
    delivery: false,
    payment: false,
    addressFilled: '',
}

const checkoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADDRESS:
            return state
        case actionTypes.DELIVERY:
            return {
                ...state,
                delivery: true
            }
        case actionTypes.PAYMENT:
            return state
        case actionTypes.ADDRESS_CHECK:
            return {
                ...state,
                addressFilled: action.payload
            }
        default:
            return state
    }
}

export default checkoutReducer;