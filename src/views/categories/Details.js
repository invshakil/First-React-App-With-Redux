import React from "react";
import {useDispatch} from "react-redux";
import {deleteCategory, setCategoryId, toggleCategory} from "../../store/actions/categoryActions";
import {Button, Card, ListGroup} from "react-bootstrap";
import CheckBox from "../../components/inputs/CheckBox";

const Category = ({category, onDelete}) => {
    const dispatch = useDispatch()

    const handleChange = (categoryId) => async (event) => {
        const isEnabled = event.target.checked;
        await dispatch(toggleCategory({
            id: categoryId,
            isEnabled: isEnabled
        }))
    }
    const handleEditClick = async () => {
        await dispatch(setCategoryId(category.id))
    }

    const handleDeleteClick = async () => {
        // eslint-disable-next-line no-restricted-globals
        const confirmed = confirm('Are you sure?');
        if (confirmed) {
            await dispatch(deleteCategory(category.id))
            onDelete()
        }
    }

    return (
        <Card style={{width: '18rem'}}>
            <ListGroup variant="flush" activeKey={category.id}>
                <ListGroup.Item>{category.name}</ListGroup.Item>
                <ListGroup.Item>{category.enabled ? '✅ Enabled' : '❎ Disabled'}</ListGroup.Item>
                <ListGroup.Item>
                    <CheckBox label={category.enabled ? 'Disable' : 'Enable'}
                              defaultChecked={category.enabled}
                              onChange={handleChange(category.id)}
                              id={'checkbox' + category.id}
                    />
                </ListGroup.Item>
                <ListGroup.Item className={"button-wrapper"}>
                    <Button variant="warning" size={"sm"} onClick={handleEditClick}>Edit</Button>
                    <Button variant="danger" size={"sm"} onClick={handleDeleteClick}>Delete</Button>
                </ListGroup.Item>
            </ListGroup>
        </Card>
    )
};

export default Category;
