import React from 'react';
import CountryList from './CountryList';
import Countries from '../Constants/Countries'

const App = () => {
    return(
        <div className="ui one column stackable center aligned page grid">
        <div className="column twelve wide">
            <CountryList countries={Countries}/>
        </div>
     </div>
    );
}
export default App