import React from "react";
import Form from "./Form";
import List from "./List";

export default function Categories() {
    return (
        <div className="todo-app">
            <h1>Category List</h1>
            <Form/>
            <List/>
        </div>
    );
}
