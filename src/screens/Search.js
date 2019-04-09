import React from 'react';

import SearchBox from '../components/SearchBox';
import SearchResults from '../components/SearchResults';

const Search = ({location}) => {
    const params = new URLSearchParams(location.search);
    return(
        <div>
            <div className="ui one column stackable center aligned page grid" style={{margin:'20px'}}>
                <div className="column twelve wide">
                    <SearchBox />
                </div>
            </div> 
             <div className="ui one column stackable center aligned page grid" style={{margin:'20px'}}>
                <div className="column twelve wide">
                   <input className="ui button" type="file" />
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