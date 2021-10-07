import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from '../Components/Login';
import Register from '../Components/Register';
import ContactApp from '../ContactApp';
import ProtectRoute from './ProtectRoute';


const Router = () => {
    return (
        <BrowserRouter>
            <ProtectRoute exact path="/" component={ContactApp} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
        </BrowserRouter>
    );
}

export default Router;
