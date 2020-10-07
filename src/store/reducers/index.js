import {combineReducers} from "redux";
import visibilityFilter from "./visibilityFilter";
import categories from "./categories";
import notification from "./notification";

export default combineReducers(
    {categories, visibilityFilter, notification},
);
