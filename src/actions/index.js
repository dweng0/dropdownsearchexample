export  const updateSearch = (query) => {
    return{
        type: 'QUERY_UPDATED',
        payload: query
    };
};