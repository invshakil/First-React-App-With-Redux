import React from "react";
import Form from "./Form";
import List from "./List";
import Filter from "./Filter";
import {useSelector} from "react-redux";
import {getCategoryById} from "../../store/selectors/categorySelectors";

export default function Categories() {
    const categoryInfo = useSelector((state) => getCategoryById(state, state.categories.editId))

    return (
        <div className="todo-app">
            <h1>Category List</h1>
            <Form key="category-form" category={categoryInfo}/>
            <div className="filterArea">
                <Filter key="filter-categories"/>
            </div>
            <List key="categories-list"/>
        </div>
    );
}
