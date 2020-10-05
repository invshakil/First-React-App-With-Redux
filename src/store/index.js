import {compose, createStore} from "redux";
import rootReducer from "./reducers";
import {loadState, saveState} from "../helpers/localStorage";

const enhancers = compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const persistedState = loadState();
const store = createStore(rootReducer, persistedState, enhancers);

store.subscribe(() => {
    saveState({
        categories: store.getState().categories
    });
});

export default store
