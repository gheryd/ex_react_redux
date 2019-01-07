import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import 'bootstrap/dist/css/bootstrap.css';
import {Provider} from "react-redux";

import {storeFactory} from "./store/store";
import registerServiceWorker from './registerServiceWorker';

const store = storeFactory();

const render = () => ReactDOM.render(
    <Provider store={store} >
        <App/>
    </Provider>
    , document.getElementById('root')
);
store.subscribe(render);

render();

registerServiceWorker();
