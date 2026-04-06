import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MarketingApp from './components/MarketingApp';
import Header from "./components/Header";
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

const generateClassName = createGenerateClassName({
    productionPrefix: 'co',
});

const App = () => {
    return (
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path="/" component={MarketingApp}  />
                </Switch>
            </BrowserRouter>
        </StylesProvider>
    );
};

export default App;