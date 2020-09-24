import React from "react";
import Add from "./add";
import List from "./list";
import Filter from "./filter";

export default function Categories() {
    return (
        <div className="todo-app">
            <h1>Category List</h1>
            <Add/>
            <List/>
            <Filter/>
        </div>
    );
}
