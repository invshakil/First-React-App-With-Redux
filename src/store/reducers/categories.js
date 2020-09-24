import {ADD, TOGGLE} from "../actionTypes";

const initialState = {
    allIds: [],
    byIds: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD: {
            const {id, name} = action.payload;
            return {
                ...state,
                allIds: [...state.allIds, id],
                byIds: {
                    ...state.byIds,
                    [id]: {
                        name,
                        enabled: false
                    }
                }
            };
        }
        case TOGGLE: {
            const {id} = action.payload;
            return {
                ...state,
                byIds: {
                    ...state.byIds,
                    [id]: {
                        ...state.byIds[id],
                        enabled: !state.byIds[id].enabled
                    }
                }
            };
        }
        default:
            return state;
    }
}
