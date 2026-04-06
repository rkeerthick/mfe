import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MarketingApp from './components/MarketingApp';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={MarketingApp}  />
            </Switch>
        </BrowserRouter>
    );
};

export default App;