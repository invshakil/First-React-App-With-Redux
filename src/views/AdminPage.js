import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import Header from "../components/Layouts/Header";
import routes from "../routes.js";
import {Container} from "react-bootstrap";


const switchRoutes = (
    <Switch>
        {routes.map((prop, key) => {
            if (prop.layout === "/admin") {
                return (
                    <Route
                        path={prop.layout + prop.path}
                        component={prop.component}
                        key={key}
                    />
                );
            }
            return null;
        })}
        <Redirect from="/admin" to="/admin/dashboard"/>
    </Switch>
);

export default function AdminPage(props) {
    return (
        <>
            <Header/>
            <Container>
                {switchRoutes}
            </Container>
        </>
    )
}
