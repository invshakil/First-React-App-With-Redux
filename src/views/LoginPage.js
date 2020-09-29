import React from "react";
import {Button, Container, Form, Jumbotron} from "react-bootstrap";
import {useForm} from "react-hook-form";
import {useHistory} from 'react-router-dom'
import TextField from '../components/inputs/TextField'
import CheckBox from "../components/inputs/CheckBox";
import {email} from "../helpers/patterns";

const LoginPage = () => {
    const history = useHistory()
    const {register, errors, handleSubmit, setValue} = useForm({
        mode: "onChange"
    });
    const handleInput = (event) => {
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
        setValue('remember', value);
    }
    const submit = (data) => {
        console.log(data)
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
                <div className="categoryForm">
                    <Form onSubmit={handleSubmit(submit)}>
                        <TextField name="email"
                                   type="email"
                                   label="Email Address"
                                   placeholder="Enter your email address"
                                   infoText="We'll not use this information other than authentication"
                                   ref={emailValidation}
                                   errorMessage={errors.email && errors.email.message}
                        />

                        <TextField name="password"
                                   type="password"
                                   label="Password"
                                   placeholder="*******"
                                   ref={passwordValidation}
                                   errorMessage={errors.password && errors.password.message}
                        />

                        <CheckBox label="Remember Me"
                                  name="remember"
                                  defaultChecked={false}
                                  onChange={handleInput}
                                  ref={register}
                        />
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </Jumbotron>
        </Container>
    )
}

export default LoginPage
