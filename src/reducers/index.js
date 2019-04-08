import { combineReducers } from 'redux';

const updateSearchQueryReducer = (query = null, action) => {
    let selection = query || "";
    if(action.type === 'QUERY_UPDATED')
    {
        selection = action.payload;
    }
    return selection;
}


const itemReducer = () => {
    return [
  ]
}

export default combineReducers({
    items: itemReducer,
    searchQuery: updateSearchQueryReducer
})