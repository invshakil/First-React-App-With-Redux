import {ADD, DELETE, SET_FILTER, SET_ID, TOGGLE, UPDATE} from "../actionTypes";
import {v4} from "node-uuid"

export const addCategory = payload => ({
    type: ADD,
    payload: {
        id: v4(),
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

export const deleteCategory = payload => ({
    type: DELETE,
    payload
})

export const setFilter = filter => ({
    type: SET_FILTER,
    payload: {filter}
});
