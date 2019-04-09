import React from 'react';
import SearchBox from '../components/SearchBox';
const Search = ({location}) => {
    const params = new URLSearchParams(location.search);
    return(
        <div className="ui one column stackable center aligned page grid" style={{margin:'20px'}}>
        <div className="column twelve wide">
            <SearchBox />
            //todo list view <Child name={params.get("name") orderBy={params.get("orderBy"} />
        </div>
     </div>
    );
}
export default Search