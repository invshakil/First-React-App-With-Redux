import React from "react";
import {connect} from "react-redux";
import cx from "classnames";
import {toggleCategory} from "../../store/actions/categoryActions";

const Category = ({ category, toggleCategory }) => {

    return (
        <li className="todo-item" onClick={() => toggleCategory(category.id)}>
            {category && category.enabled ? "👌" : "👋"}{" "}
            <span
                className={cx(
                    "todo-item__text",
                    category && category.enabled && "todo-item__text--completed"
                )}
            >
      {category.name}
    </span>
        </li>
    )
};

// export default Category;
export default connect(
    null,
    {toggleCategory}
)(Category);
