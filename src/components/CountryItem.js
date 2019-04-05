import React from 'react';

const CountryItem = (props) => {
    return (
        //have to use onMousDown instead of onclick css bug, a search on semantic github found this open issue: https://github.com/Semantic-Org/Semantic-UI-React/issues/2121
        <div className="item" style={{zIndex: 1}} onMouseDown={() => { props.updateSearch(props.country)}}>{props.country}</div>
    )
}

export default CountryItem;