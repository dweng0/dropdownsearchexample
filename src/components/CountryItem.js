import React from 'react';

const CountryItem = (props) => {
    return (
        <div className="item" style={{zIndex: 1}} onClick={() => { props.selectCountry(props.country)}}>{props.country}</div>
    )
}

export default CountryItem;