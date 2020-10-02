import {ADD, SET_FILTER, SET_ID, TOGGLE, UPDATE} from "../actionTypes";
import {getCategories} from "../selectors/categorySelectors";

let id = getCategories.length + 1;
export const addCategory = payload => ({
    type: ADD,
    payload: {
        id: ++id,
        name: payload.name,
        enabled: payload.enabled
    }
});

export const toggleCategory = ({id, isEnabled}) => ({
    type: TOGGLE,
    payload: {id, isEnabled}
});

export const setCategoryId = categoryId => ({
    type: SET_ID,
    payload: categoryId
})

export const updateCategory = payload => ({
    type: UPDATE,
    payload
})

export const setFilter = filter => ({
    type: SET_FILTER,
    payload: {filter}
});
