import React from "react";
import {connect} from "react-redux";
import {toggleCategory} from "../../store/actions/categoryActions";
import {Card, ListGroup} from "react-bootstrap";
import CheckBox from "../../components/inputs/CheckBox";

const Category = ({category, toggleCategory}) => {
    const handleChange = async (event) => {
        const isEnabled = event.target.checked;
        await toggleCategory({
            id: category.id,
            isEnabled: isEnabled
        })
    }
    return (
        <Card style={{width: '18rem'}}>
            <ListGroup variant="flush">
                <ListGroup.Item>{category.name}</ListGroup.Item>
                <ListGroup.Item>{category.enabled ? '✅ Enabled' : '❎ Disabled'}</ListGroup.Item>
                <ListGroup.Item>
                    <CheckBox label={category.enabled ? 'Disable' : 'Enable'}
                              defaultChecked={category.enabled}
                              onChange={handleChange}
                    />
                </ListGroup.Item>
            </ListGroup>
        </Card>
    )
};

// export default Category;
export default connect(
    null,
    {toggleCategory}
)(Category);
