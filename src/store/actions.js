import {ADD, SET_FILTER, TOGGLE} from "./actionTypes";

let id = 0;

export const addCategory = name => ({
    type: ADD,
    payload: {
        id: ++id,
        name
    }
});

export const toggleCategory = id =>  ({
    type: TOGGLE,
    payload: {id}
});

export const setFilter = filter => ({
    type: SET_FILTER,
    payload: {filter}
});
