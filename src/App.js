import React from 'react';
import {Redirect, Route, Router, Switch} from 'react-router-dom'
import {createBrowserHistory} from "history";
import {Provider} from 'react-redux'
import LoginPage from "./views/LoginPage";
import AdminPage from "./views/AdminPage";
// Redux Store
import store from './store'

//Styles
import './App.css'
import './styles/index.scss'

const history = createBrowserHistory();

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <Router history={history}>
                    <Switch>
                        <Route path="/login" component={LoginPage}/>
                        <Route path="/admin" component={AdminPage}/>
                        <Route exact path="*" component={NotFound}/>
                        <Redirect from="/" to="/login"/>
                    </Switch>
                </Router>
            </Provider>
        </div>
    );
}

export default App;

export function NotFound() {
    return (
        <h3>Sorry! What you are looking for, doesn't exists or removed.</h3>
    )
}
