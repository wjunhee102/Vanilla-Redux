import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ReduxApp from './ReduxApp';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<ReduxApp />, document.getElementById('root'));

serviceWorker.unregister();
