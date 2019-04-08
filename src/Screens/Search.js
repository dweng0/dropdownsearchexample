import React from 'react';

import SearchBox from '../components/SearchBox';
import DropZone from '../components/Dropzone';
const Search = () => {
    return(
        <div className="ui one column stackable center aligned page grid" style={{margin:'20px'}}>
        <div className="column twelve wide">
            <SearchBox />
            <DropZone/>
        </div>
     </div>
    );
}
export default Search