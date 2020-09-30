import React from "react";
import {useDispatch} from "react-redux";
import {setCategoryId, toggleCategory} from "../../store/actions/categoryActions";
import {Button, Card, ListGroup} from "react-bootstrap";
import CheckBox from "../../components/inputs/CheckBox";

const Category = ({category}) => {
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
    return (
        <Card style={{width: '18rem'}}>
            <ListGroup variant="flush" activeKey={category.id}>
                <ListGroup.Item>{category.name}</ListGroup.Item>
                <ListGroup.Item>{category.enabled ? '✅ Enabled' : '❎ Disabled'}</ListGroup.Item>
                <ListGroup.Item>
                    <CheckBox label={category.enabled ? 'Disable' : 'Enable'}
                              defaultChecked={category.enabled}
                              onChange={handleChange(category.id)}
                    />
                </ListGroup.Item>
                <ListGroup.Item>
                    <Button variant="danger" onClick={handleEditClick}>Edit</Button>
                </ListGroup.Item>
            </ListGroup>
        </Card>
    )
};

export default Category;
