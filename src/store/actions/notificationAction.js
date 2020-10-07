import {SET_INFO, TOGGLE} from "../actionTypes";

export const setNotificationInfo = payload => ({
    type: SET_INFO,
    payload
})

export const toggleNotificationDisplay = shouldDisplay => ({
    type: TOGGLE,
    payload: shouldDisplay
});
