import React from "react";
import {useDispatch} from "react-redux";
import {addCategory} from "../../store/actions/categoryActions";
import {Button, Col, Form, Row} from "react-bootstrap";
import TextField from "../../components/inputs/TextField";
import CheckBox from "../../components/inputs/CheckBox";
import {useForm} from "react-hook-form";

const AddCategory = () => {
    const dispatch = useDispatch()
    const {register, errors, handleSubmit, reset} = useForm({
        mode: "onChange"
    });
    const submit = (data) => {
        dispatch(addCategory(data))
        reset()
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
                               ref={nameValidation}
                               errorMessage={errors.name && errors.name.message}
                    />
                </Col>

                <Col lg={2}>
                    <br/>
                    <br/>
                    <CheckBox label="Published"
                              name="enabled"
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
