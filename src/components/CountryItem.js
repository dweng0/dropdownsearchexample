import React from 'react';

const CountryItem = (props) => {
    return (
        <div className="item" onClick={() => {this.props.selectCountry(props.country)}}>{props.country}</div>
    )
}

export default CountryItem;