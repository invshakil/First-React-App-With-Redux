import React from "react";
import {Form} from "react-bootstrap";
import InfoTextBox from "./InfoText";

const CheckBox = React.forwardRef(
    ({label, errorMessage, ...restProps}, ref) => {
        const hasErrorMessage = (errorMessage !== undefined && errorMessage.length)
        return (
            <Form.Group>
                <Form.Check type="checkbox"
                            label={label}
                            ref={ref}
                            {...restProps}
                            key={label}
                />

                {
                    hasErrorMessage &&
                    <InfoTextBox text={errorMessage} isError={true}/>
                }
            </Form.Group>
        )
    }
)
export default React.memo(CheckBox)
