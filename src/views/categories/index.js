import React from "react";
import Form from "./Form";
import List from "./List";
import Filter from "./Filter";

export default function Categories() {
    return (
        <div className="todo-app">
            <h1>Category List</h1>
            <Form key="form"/>
            <div className="filterArea">
                <Filter/>
            </div>
            <List/>
        </div>
    );
}
