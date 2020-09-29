import {ADD, TOGGLE} from "../actionTypes";

const initialState = [
    {id: 1, name: "Sports", enabled: true},
    {id: 2, name: "Draft", enabled: false},
];

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD: {
            const {id, name, enabled} = action.payload;
            return [
                ...state,
                {
                    id, name, enabled
                }
            ];
        }
        case TOGGLE: {
            const {id} = action.payload;
            return state.map(item => {
                if (item.id === id) {
                    item.enabled = !item.enabled
                }
                return item
            });
        }
        default:
            return state;
    }
}
