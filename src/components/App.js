import React from 'react';
import CountryList from './CountryList';

const App = () => {
    return(
        <div className="ui one column stackable center aligned page grid" style={{margin:'20px'}}>
        <div className="column twelve wide">
            <CountryList />
        </div>
     </div>
    );
}
export default App