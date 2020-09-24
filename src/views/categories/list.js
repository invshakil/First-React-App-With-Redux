import React from "react";
import {connect} from "react-redux";
import Details from "./details";
import {getCategoriesByVisibilityFilter} from "../../store/selectors";

const CategoryList = ({categories}) => (
    <ul className="todo-list">
        {categories && categories.length
            ? categories.map((category, index) => {
                return <Details key={`category-${category.id}`} category={category}/>;
            })
            : "No Categories Created!"}
    </ul>
);

const mapStateToProps = state => {
    const {visibilityFilter} = state;
    const categories = getCategoriesByVisibilityFilter(state, visibilityFilter);
    return {categories};
};
// export default TodoList;
export default connect(mapStateToProps)(CategoryList);
