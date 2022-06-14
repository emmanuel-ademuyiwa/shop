import { actionTypes } from "./theme-types";

const initialState = {
    background: {
        header: '',
        body: 'container',
        color: 'black'
    },
    switch: {
        value: false
    }
}

const themeReducer = (state = initialState, action) => { 
    switch (action.type) {
        case actionTypes.SWITCH:
            return {
                ...state,
                switch: { 
                    value: !state.switch.value
                }
            }
        default: 
            return state
    }
}

export default themeReducer;