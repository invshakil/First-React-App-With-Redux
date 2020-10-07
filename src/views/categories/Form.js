import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {addCategory, toggleCategory, updateCategory} from "../../store/actions/categoryActions";
import {Button, Col, Form, Row} from "react-bootstrap";
import TextField from "../../components/inputs/TextField";
import CheckBox from "../../components/inputs/CheckBox";
import {useForm} from "react-hook-form";
import {setNotificationInfo} from "../../store/actions/notificationAction";


const CategoryForm = (props) => {
    const dispatch = useDispatch()

    const {register, errors, handleSubmit, reset} = useForm({
        mode: "onChange"
    });

    const categoryInfo = props.category;

    const submit = async (data, e) => {
        if (categoryInfo !== null) {
            data.id = categoryInfo.id
            await dispatch(updateCategory(data))
        } else {
            await dispatch(addCategory(data))
        }

        e.target.reset()
        await onSave()
    }

    const onSave = async () => {
        await dispatch(setNotificationInfo({
            title: 'Save Confirmation',
            message: 'Category Saved Successfully!',
            autoHide: true,
            delay: 3500
        }))
        await dispatch(toggleCategory(true))
    }

    useEffect(() => {
        reset(categoryInfo)
    }, [categoryInfo, reset])

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
                               defaultValue={categoryInfo !== null ? categoryInfo.name : ''}
                               ref={nameValidation}
                               errorMessage={errors.name && errors.name.message}
                               id={'category-name'}
                    />
                </Col>

                <Col lg={2}>
                    <br/>
                    <br/>
                    <CheckBox label="Published"
                              name="enabled"
                              defaultChecked={categoryInfo !== null ? categoryInfo.enabled : false}
                              ref={register}
                              id={'category-enabled'}
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

export default React.memo(CategoryForm)
