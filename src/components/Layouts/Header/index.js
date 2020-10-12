import React from 'react';
import {NavLink} from 'react-router-dom'
import {Nav, Navbar, NavDropdown} from "react-bootstrap";

const Header = () => {
    const app = {
        'name': 'React App',
        'version': 'v0.1'
    }
    const navs = [
        {name: "Create Product", to: '/admin/product/create'},
        {name: "Manage Product", to: '/admin/product/manage'},
        {
            name: "Dependency",
            subLinks: [
                {name: "Categories", 'to': '/admin/categories'}
            ]
        }
    ]

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
            <Navbar.Brand as={NavLink} to="/admin">{app.name} {app.version}</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    {navigationLinks}
                </Nav>
                <Nav>
                    <Nav.Link as={NavLink} to='/settings'>
                        Settings
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default Header
