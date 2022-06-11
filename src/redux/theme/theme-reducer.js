import { actionTypes } from "./theme-types";

const initialState = {
    background: {
        header: '',
        body: 'container',
        color: 'black'
    }
}

const themeReducer = (state = initialState, action) => { 
    switch (action.type) {
        case actionTypes.LOAD_LIGHT_MODE:
            return {
                ...state,
                background: {
                    header: '',
                    body: 'container',
                    color: 'black'
                }
            }
        case actionTypes.LOAD_DARK_MODE:
            return {
                ...state,
                background: {
                    header: 'darkMode',
                    body: 'darkContainer',
                    color: 'white'
                }
            }
        default: 
            return state
    }
}

export default themeReducer;