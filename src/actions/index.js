export  const updateSearch = (query) => {
    console.log(query);
    return{
        type: 'QUERY_UPDATED',
        payload: query
    };
};