import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from '../components/Header';
import Splash from './Splash';

const PageTwo = () => {
    return <div className="column twelve wide">pagetwo</div>;
}

const App = () => {
    return(
        <div className="main ui container">
            <div className="ui one column stackable center aligned page grid" style={{margin:'20px'}}>
                <BrowserRouter>
                    <Route path="/" exact component={Splash}/>
                    <Route path="/schema" component={Header}/>
                    <Route path="/schema" component={PageTwo}/>
                </BrowserRouter>
            </div>
        </div>



    );
}
export default App