import React from "react";
import {Form} from "react-bootstrap";
import InfoTextBox from "./InfoText";

const TextField = React.forwardRef(
    ({label, rules, infoText, errorMessage, ...restProps}, ref) => {
        const hasErrorMessage = (errorMessage !== undefined && errorMessage.length)
        return (
            <Form.Group controlId={'formBasic' + label.split(' ').join('').toUpperCase()}
                        className={hasErrorMessage ? 'has-error' : ''}>
                <Form.Label>{label}</Form.Label>
                <Form.Control {...restProps} ref={ref}/>

                {
                    hasErrorMessage &&
                    <InfoTextBox text={errorMessage} isError={true}/>
                }

                {
                    (infoText !== undefined && infoText.length) &&
                    <InfoTextBox text={infoText}/>
                }
            </Form.Group>
        )
    }
)

export default TextField
