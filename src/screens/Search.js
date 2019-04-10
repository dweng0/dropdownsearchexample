import React from 'react';

import SearchBox from '../components/SearchBox';
import SearchResults from '../components/SearchResults';
import FileUploader from '../components/FileUploader';

const Search = ({location}) => {
    return(
        <div>
            <div className="ui one column stackable center aligned page grid" style={{margin:'20px'}}>
                <div className="column twelve wide">
                    <SearchBox />
                </div>
            </div>
             <div className="ui one column stackable center aligned page grid" style={{margin:'20px'}}>
                <div className="column twelve wide">
                   <FileUploader />
                </div>
            </div>
            <div className="ui one column stackable center page grid" style={{margin:'20px'}}>
                <div className="column twelve wide">
                    <SearchResults/>
                </div>
            </div>
        </div>
    );
}
export default Search