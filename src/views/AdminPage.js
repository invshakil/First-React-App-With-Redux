import React from "react";
import {Route, Switch} from "react-router-dom";
import Header from "../components/Layouts/Header";
import routes from "../routes.js";
import {Container} from "react-bootstrap";
import error404 from "./errors/404";


const switchRoutes = (
    <Switch>
        {routes.map((route, key) => {
            if (route.layout === "/admin") {
                return (
                    <Route
                        key={key}
                        exact={route.exact !== undefined && route.exact}
                        path={route.layout + route.path}
                        component={route.component}
                    />
                );
            }
            return null;
        })}
        <Route path="*" component={error404}/>
    </Switch>
);

export default function AdminPage(props) {
    return (
        <div>
            <Header/>
            <Container>
                {switchRoutes}
            </Container>
        </div>
    )
}
