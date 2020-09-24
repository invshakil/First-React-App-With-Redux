import React, {useState} from 'react';
import {NavLink} from 'react-router-dom'
import {Nav, Navbar, NavDropdown} from "react-bootstrap";

const header = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [app] = useState({
        'name': 'React App',
        'version': 'v0.1'
    })
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [navs] = useState([
        {name: "Create Data", to: '/create'},
        {name: "List Data", to: '/list'},
        {
            name: "Dependency",
            subLinks: [
                {name: "Categories", 'to': '/categories'}
            ]
        }
    ])

    let navigationLinks = navs.map((item, index) => {
        if (item.subLinks !== undefined && item.subLinks.length) {
            const subLinks = item.subLinks.map((subLink, sIndex) => {
                return (
                    <NavDropdown.Item key={'i-' + sIndex} as={NavLink} to={subLink.to}>
                        {subLink.name}
                    </NavDropdown.Item>
                )
            })
            return (
                <NavDropdown title={item.name} key={'nI-' + index} id="collapsible-dropdown">
                    {subLinks}
                </NavDropdown>
            )
        } else {
            return (
                <Nav.Link key={'nI-' + index} as={NavLink} to={item.to}>
                    {item.name}
                </Nav.Link>
            )
        }
    })

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#">{app.name} {app.version}</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    {navigationLinks}
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">More deets</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Dank memes
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default header
