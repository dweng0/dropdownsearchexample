import React from 'react';
import { connect } from 'react-redux';
const onItemClicked = (event) => {
    //todo propogate via redux
}
const CountryItem = (props) => {
    return (
        <div className="item" onClick={onItemClicked}>{props.country}</div>
    )
}

const mapStateToProps = (state) => {
    return {
        country: selectedCountry
    }
};

export default connect(mapStateToProps)(CountryItem);