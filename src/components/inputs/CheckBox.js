import React from "react";
import {Form} from "react-bootstrap";
import InfoTextBox from "./InfoText";

const CheckBox = React.forwardRef(
    ({label, errorMessage, ...restProps}, ref) => {
        const hasErrorMessage = (errorMessage !== undefined && errorMessage.length)

        return (
            <Form.Group controlId={'formBasic' + label.split(' ').join('').toUpperCase()}>
                <Form.Check type="checkbox" label={label} {...restProps} ref={ref} />

                {
                    hasErrorMessage &&
                    <InfoTextBox text={errorMessage} isError={true}/>
                }
            </Form.Group>
        )
    }
)
export default CheckBox
