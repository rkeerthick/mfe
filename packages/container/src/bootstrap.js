import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const mount = (el) => {
    ReactDOM.render(<App />, el);
};

const root = document.getElementById('container-app');
if (root) {
    mount(root);
}

export { mount };