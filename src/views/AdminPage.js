import React, {useEffect} from "react";
import {Route, Switch} from "react-router-dom";
import Header from "../components/Layouts/Header";
import routes from "../routes.js";
import {Container} from "react-bootstrap";
import error404 from "./errors/404";
import Notification from "../components/plugins/Notification";
import {useDispatch, useSelector} from "react-redux";
import {toggleNotificationDisplay} from "../store/actions/notificationAction";
import {notificationDisplay, notificationInfo} from "../store/selectors/notificationSelector";


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

export default function AdminPage() {
    const dispatch = useDispatch()

    const [showToast, setShowToast] = React.useState(false);

    const info = useSelector((state) => notificationInfo(state))

    const display = useSelector((state) => notificationDisplay(state))

    useEffect(() => {
        setShowToast(display)
    }, [display])

    const notification = (
        <Notification title={info.title}
                      message={info.message}
                      autoHide={info.autoHide}
                      delay={info.delay}
                      animation={info.animation}
                      time={info.time}
                      onClose={() => dispatch(toggleNotificationDisplay(false))}
        />
    )

    return (
        <div>
            <Header/>
            <Container>
                {switchRoutes}
                {showToast ? notification : ''}
            </Container>
        </div>
    )
}
