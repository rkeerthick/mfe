import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const mount = (el) => {
    ReactDOM.render(<App />, el);
};

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.getElementById('container-app');
    if (devRoot) {
        mount(devRoot);
    }
}
export { mount };