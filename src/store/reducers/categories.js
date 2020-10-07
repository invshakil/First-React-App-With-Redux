import {ADD, DELETE, SET_ID, TOGGLE, UPDATE} from "../actionTypes";

const initialState = {
    data: [],
    editId: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD: {
            const {id, name, enabled} = action.payload;
            return {
                ...state,
                data: [
                    ...state.data,
                    {
                        id, name, enabled
                    }
                ]
            }
        }
        case SET_ID: {
            const categoryId = action.payload
            return {
                ...state,
                editId: categoryId
            };
        }
        case TOGGLE: {
            const {id, isEnabled} = action.payload;
            return {
                ...state,
                data: state.data.map(item => item.id === id ? {...item, enabled: isEnabled} : item)
            };
        }
        case UPDATE: {
            const {id, name, enabled} = action.payload
            return {
                data: state.data.map(category => category.id === id ? {id, name, enabled} : category),
                editId: null
            }
        }
        case DELETE: {
            const id = action.payload
            return {
                data: state.data.filter(category => category.id !== id),
                editId: null
            }
        }
        default:
            return state;
    }
}
