import {SET_INFO, TOGGLE} from "../actionTypes";

const initialState = {
    info: {
        title: '',
        message: '',
        delay: 3000,
        autoHide: false,
        time: null,
        animation: true
    },
    display: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_INFO: {
            const info = action.payload
            return {
                ...state,
                info: {...state.info, ...info}
            };
        }
        case TOGGLE: {
            const display = action.payload;
            return {
                ...state,
                display
            };
        }

        default:
            return state;
    }
}
