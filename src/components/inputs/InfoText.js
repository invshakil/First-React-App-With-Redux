import React from "react";
import {Form} from "react-bootstrap";

export default function InfoTextBox({text, isError = false}) {
    return (
        <Form.Text className={isError ? 'error' : 'text-muted'}>
            {text}
        </Form.Text>
    )
}
