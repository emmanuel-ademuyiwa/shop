import { actionTypes } from "./theme-types";

export const lightMode = () => { 
    return { 
        type: actionTypes.LOAD_LIGHT_MODE
    }
}

export const darkMode = () => {
    return {
        type: actionTypes.LOAD_DARK_MODE
    }
}