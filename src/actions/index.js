export  const updateSearch = (query, isSelected) => {
    console.log(query);
    return{
        type: 'QUERY_UPDATED',
        payload: {query, isSelected}
    };
};

export  const updateWordArray = (words) => {
    console.log(words);
    return{
        type: 'WORD_ARRAY_UPDATED',
        payload: words
    };
};