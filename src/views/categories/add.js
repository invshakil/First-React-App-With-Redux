import React, {useState} from "react";
import {connect} from "react-redux";
import {addCategory} from "../../store/actions";

const AddCategory = (props) => {
    const [input, setInput] = useState('')

    const updateInput = input => {
        setInput(input);
    };

    const handleAddCategory = () => {
        props.addCategory(input);
        setInput('')
    };

    return (
        <div>
            <input
                onChange={e => updateInput(e.target.value)}
                value={input}
            />
            <button className="add-todo" onClick={handleAddCategory}>
                Add Category
            </button>
        </div>
    );
}

export default connect(
    null,
    {addCategory}
)(AddCategory);
