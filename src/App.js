import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store'
// import Header from "./components/Layouts/Header";
import LoginPage from "./views/LoginPage";
import Categories from "./views/categories";
import './App.css'
import './styles/index.scss'

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route path="/" component={LoginPage}/>
                        <Route exact path="/categories" component={Categories}/>
                        <Route exact path="*" component={NotFound}/>
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
