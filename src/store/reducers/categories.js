import {ADD, SET_ID, TOGGLE, UPDATE} from "../actionTypes";

let categories = localStorage.getItem("categories");
if (categories === null) {
    categories = [
        {id: 1, name: "Sports", enabled: true},
        {id: 2, name: "Draft", enabled: false},
    ];
}
const initialState = {
    data: categories,
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
                ...state,
                data: state.data.map(category => category.id === id ? {id, name, enabled} : category)
            }
        }
        default:
            return state;
    }
}
