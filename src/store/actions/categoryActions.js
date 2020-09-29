import {ADD, SET_FILTER, TOGGLE} from "../actionTypes";
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

export const setFilter = filter => ({
    type: SET_FILTER,
    payload: {filter}
});
