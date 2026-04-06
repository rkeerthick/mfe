import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MarketingApp from './components/MarketingApp';
import Header from "./components/Header";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Header />
                <Route path="/" component={MarketingApp}  />
            </Switch>
        </BrowserRouter>
    );
};

export default App;