import actionTypes from "./checkout-types";


export const address = () => { 
    return { 
        type: actionTypes.ADDRESS
    }
}

export const deliveryType = () => {
    return { 
        type: actionTypes.DELIVERY
    }
}

export const payment = () => {
    return { 
        type: actionTypes.PAYMENT
    }
}

export const addressCheck = (value) => {
    return {
        type: actionTypes.ADDRESS_CHECK,
        payload: value
    }
}