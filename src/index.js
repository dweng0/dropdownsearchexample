import React from 'react';
import ReactDOM from 'react-dom';
import CountryList from './components/CountryList';

const App = () => {
    return(
        <div className="ui one column stackable center aligned page grid">
        <div className="column twelve wide">
            <CountryList/>
        </div>
     </div>
    );
}

ReactDOM.render(<App/>, document.getElementById('root'));