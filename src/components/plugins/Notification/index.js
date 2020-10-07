import React from "react";
import * as PropTypes from "prop-types";
import {Col, Row, Toast} from "react-bootstrap";

const Notification = ({time, autoHide, delay, title, message, onClose, animation}) => {
    return (
        <Row>
            <Col xs={6}>
                <Toast onClose={() => onClose()} show={true} delay={delay} autohide={autoHide} animation={animation}>
                    <Toast.Header>
                        {
                            title ? <strong className="mr-auto">{title}</strong> : null
                        }
                        {
                            time ? <small>{time}</small> : null
                        }
                    </Toast.Header>
                    {
                        <Toast.Body>{message}</Toast.Body>
                    }
                </Toast>
            </Col>
        </Row>
    );
}

Notification.defaultProps = {
    autoHide: false,
    delay: 3000,
    animation: true
}

Notification.propTypes = {
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    autoHide: PropTypes.bool,
    onClose: PropTypes.func.isRequired
}


export default Notification
