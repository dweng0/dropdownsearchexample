import React from 'react';
import ReactDOM from 'react-dom';
import CountryList from './components/CountryList';
import Countries from './Constants/Countries'

const App = () => {
    return(
        <div className="ui one column stackable center aligned page grid">
        <div className="column twelve wide">
            <CountryList countries={Countries}/>
        </div>
     </div>
    );
}

ReactDOM.render(<App/>, document.getElementById('root'));