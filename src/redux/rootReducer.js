import { combineReducers } from "redux";
import shopReducer from './shopping/shopping-reducers';
import themeReducer from "./theme/theme-reducer";

export const rootReducer = combineReducers({
    shop: shopReducer,
    theme: themeReducer
})