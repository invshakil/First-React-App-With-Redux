import React, {useState} from "react";
import {Button, Container, Form, Jumbotron} from "react-bootstrap";
import {useForm} from "react-hook-form";
import TextField from '../components/inputs/TextField'
import {email} from "../helpers/patterns";

const LoginPage = () => {
    const {register, errors, handleSubmit} = useForm({
        mode: "onChange"
    });
    const [form, setForm] = useState({
        email: '',
        password: '',
        rememberMe: false
    })
    const handleInput = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    }
    const submit = () => {
        console.log(form)
    }

    // Validations for inputs
    const emailValidation = register({
        required: (
            'Email is required'
        ),
        pattern: {
            value: email,
            message: (
                'Email must be a valid email address'
            )
        }
    });

    const passwordValidation = register({
        required: ('Password is required')
    })

    return (
        <Container className="loginPageWrapper">
            <Jumbotron className="formWrapper">
                <h3 className="my-auto text-center">Login Page</h3>
                <Form onSubmit={handleSubmit(submit)}>
                    <TextField name="email"
                               type="email"
                               label="Email Address"
                               placeholder="Enter your email address"
                               infoText="We'll not use this information other than authentication"
                               ref={emailValidation}
                               errorMessage={errors.email && errors.email.message}
                               onChange={handleInput}
                    />

                    <TextField name="password"
                               type="password"
                               label="Password"
                               placeholder="*******"
                               ref={passwordValidation}
                               errorMessage={errors.password && errors.password.message}
                               onChange={handleInput}
                    />

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember me"/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Jumbotron>
        </Container>
    )
}

export default LoginPage
