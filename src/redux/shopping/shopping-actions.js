import actionTypes from './shopping-types';

export const addToCart = (product) => { 
    return {
        type: actionTypes.ADD_TO_CART,
        payload: product
    }
}

export const removeFromCart = (itemID) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: {
            id: itemID
        }
    }
}   

export const increaseItem = (itemID) => { 
    return {
        type: actionTypes.INCREASE_ITEM,
        payload: {
            id: itemID
        }
    }
}

export const decreaseItem = (itemID) => { 
    return {
        type: actionTypes.DECREASE_ITEM,
        payload: {
            id: itemID
        }
    }
}

export const adjustQty = (itemID, value) => {
    return {
        type: actionTypes.ADJUST_QTY,
        payload: {
            id: itemID,
            qty: value
        }
    }
}

export const loadCurrentItem = (item) => {
    return {
        type: actionTypes.LOAD_CURRENT_ITEM,
        payload: item
    }
}

export const checkAddress = () => {
    return { 
        type: actionTypes.CHECK_ADDRESS
    }
}

export const checkDelivery = () => {
    return { 
        type: actionTypes.CHECK_DELIVERY
    }
}