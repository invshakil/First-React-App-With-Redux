import React, {useState} from "react";
import { useHistory } from 'react-router-dom';
import {Button, Container, Form, Jumbotron} from "react-bootstrap";
import {useForm} from "react-hook-form";
import TextField from '../components/inputs/TextField'
import CheckBox from "../components/inputs/CheckBox";
import {email} from "../helpers/patterns";

const LoginPage = () => {
    const history = useHistory()
    const {register, errors, handleSubmit} = useForm({
        mode: "onChange"
    });
    const [form, setForm] = useState({
        email: '',
        password: '',
        remember: false
    })
    const handleInput = (event) => {
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
        setForm({
            ...form,
            [event.target.name]: value
        });
    }
    const submit = () => {
       history.push('/admin')
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
                               value={form.email}
                               onChange={handleInput}
                    />

                    <TextField name="password"
                               type="password"
                               label="Password"
                               placeholder="*******"
                               ref={passwordValidation}
                               errorMessage={errors.password && errors.password.message}
                               value={form.password}
                               onChange={handleInput}
                    />

                    <CheckBox label="Remember Me"
                              name="remember"
                              checked={form.remember}
                              onChange={handleInput}
                    />
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Jumbotron>
        </Container>
    )
}

export default LoginPage
