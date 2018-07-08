import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import CounterDisplay from './CounterDisplay';

const store = createStore(reducer);

ReactDOM.render(<Provider store={store}>
    <div>
        <App />
    <CounterDisplay/>
    </div>
</Provider>, document.getElementById('root'));
registerServiceWorker();
