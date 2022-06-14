import { combineReducers } from "redux";
import checkoutReducer from "./checkout/checkout-reducer";
import shopReducer from './shopping/shopping-reducers';
import themeReducer from "./theme/theme-reducer";

export const rootReducer = combineReducers({
    shop: shopReducer,
    theme: themeReducer,
    checkout: checkoutReducer
})