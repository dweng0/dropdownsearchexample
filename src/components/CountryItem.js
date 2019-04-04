import React from 'react';
const onItemClicked = (event) => {
    //todo propogate via redux
}
const CountryItem = (props) => {
    return (
        <div className="item" onClick={onItemClicked}>{props.country}</div>
    )
}
export default CountryItem;