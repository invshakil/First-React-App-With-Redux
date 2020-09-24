import {combineReducers} from "redux";
import visibilityFilter from "./visibilityFilter";
import categories from "./categories";

export default combineReducers(
    {categories, visibilityFilter},
);
