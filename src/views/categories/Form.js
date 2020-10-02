import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addCategory, updateCategory} from "../../store/actions/categoryActions";
import {Button, Col, Form, Row} from "react-bootstrap";
import TextField from "../../components/inputs/TextField";
import CheckBox from "../../components/inputs/CheckBox";
import {useForm} from "react-hook-form";
import {getCategoryById} from "../../store/selectors/categorySelectors";

const initial = {
    id: null,
    name: '',
    enabled: false
}

const AddCategory = () => {
    const [category, setCategory] = useState(initial)
    const dispatch = useDispatch()
    const {register, errors, handleSubmit, reset} = useForm({
        mode: "onChange"
    });

    useSelector(async (state) => {
        const categoryInf = await getCategoryById(state, state.categories.editId)
        if (categoryInf) {
            setCategory(categoryInf)
        }
    })

    const submit = async (data) => {
        if (category.id) {
            data.id = category.id
            await dispatch(updateCategory(data))
        } else {
            await dispatch(addCategory(data))
        }
        await reset(initial)
    }

    // Validations for inputs
    const nameValidation = register({
        required: (
            'Name is required'
        ),
        minLength: {
            value: 2,
            message: (
                'Name should have minimum 3 character'
            )
        }
    });

    return (
        <Form onSubmit={handleSubmit(submit)}>
            <Row>
                <Col lg={4}>
                    <TextField name="name"
                               type="name"
                               label="Category Name"
                               placeholder="Enter category name"
                               defaultValue={category.name}
                               ref={nameValidation}
                               errorMessage={errors.name && errors.name.message}
                    />
                </Col>

                <Col lg={2}>
                    <br/>
                    <br/>
                    <CheckBox label="Published"
                              name="enabled"
                              defaultChecked={category.enabled}
                              ref={register}
                    />
                </Col>

                <Col lg={3}>
                    <br/>
                    <Button variant="primary" type="submit">
                        Save
                    </Button>
                </Col>
            </Row>
        </Form>

    );
}

export default AddCategory
