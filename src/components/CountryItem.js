import React from 'react';

const CountryItem = (props) => {
    return (
        //have to use onMousDown instead of on click, a search on semantic github found this open issue: https://github.com/Semantic-Org/Semantic-UI-React/issues/2121
        <div className="item" style={{zIndex: 1}} onMouseDown={() => { props.selectCountry(props.country)}}>{props.country}</div>
    )
}

export default CountryItem;