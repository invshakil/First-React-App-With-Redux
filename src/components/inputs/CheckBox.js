import React from "react";
import {Form} from "react-bootstrap";
import InfoTextBox from "./InfoText";

const CheckBox = React.forwardRef(
    ({label, errorMessage, ...restProps}, ref) => {
        const hasErrorMessage = (errorMessage !== undefined && errorMessage.length)
        const labelUpperCase = label.split(' ').join('').toUpperCase()
        return (
            <Form.Group controlId={'formBasic' + labelUpperCase} id={labelUpperCase}>
                <Form.Check type="checkbox"
                            label={label}
                            ref={ref}
                            {...restProps}
                />

                {
                    hasErrorMessage &&
                    <InfoTextBox text={errorMessage} isError={true}/>
                }
            </Form.Group>
        )
    }
)
export default CheckBox
