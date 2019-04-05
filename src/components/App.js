import React from 'react';
import CountryList from './CountryList';
import FileReading from './FIleReading';
const App = () => {
    return(
        <div className="ui one column stackable center aligned page grid" style={{margin:'20px'}}>
        <div className="column twelve wide">
            <CountryList />
        </div>
        <FileReading />

     </div>
    );
}
export default App