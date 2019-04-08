import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from  'redux';

import Search from './Screens/Search';
import reducers from './reducers';


ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Search/>
    </Provider>, document.getElementById('root')
);