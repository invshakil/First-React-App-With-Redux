import React from 'react';
import {Redirect, Route, BrowserRouter, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import LoginPage from "./views/LoginPage";
import AdminPage from "./views/AdminPage";
// Redux Store
import store from './store'

//Styles
import './App.css'
import './styles/index.scss'

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/login" component={LoginPage}/>
                        <Route path="/admin" component={AdminPage}/>
                        <Redirect from="/" to="/login"/>
                    </Switch>
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;
