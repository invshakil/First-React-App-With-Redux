import React from 'react';
import Header from "./components/Layouts/Header";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store'
import Categories from "./views/categories";
import './App.css'

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <Router>
                    <Route path="/" component={Header}/>
                    <Route path="/categories" component={Categories}/>
                </Router>
            </Provider>
        </div>
    );
}

export default App;
