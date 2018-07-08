import React from 'react';
import ReactDOM from 'react-dom';
import store from './Store.js';
import {Provider} from 'react-redux';
import Counter from './Counter.js';

ReactDOM.render(
    <Provider Store={store}>
        <Counter/>
    </Provider>,
     document.getElementById('root')
    );

