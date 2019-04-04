import React from 'react';
import { connect } from 'react-redux';

import CountryItem from './CountryItem';

class CountryList extends React.Component {

    state = {
        active: false,
        countries: [],
        filteredList: [],
        searchQuery:""
    }

    constructor(props){
        super(props)
        this.state.countries = props.countries || [];
        this.state.filteredCountries = props.countries || [];
        this.state.searchQuery = props.searchQuery;
    }

    /**
    * set css based on active state
     */
    setClassByState() {
        let style = "ui fluid search selection dropdown";
        if(this.state.active)
        {
            style += " active visible";
        }
        return style;
    }


    setMenuClassByState() {
        let style = "menu";
        if(this.state.active)
        {
            style += " transition visible"
        }
        return style;
    }

    getCountries() {
        return this.state.filteredCountries.map((country, index) => {
            return <CountryItem key={index} country={country}/>
        });
    }

     searchClicked = () => {
        this.setState({
            active: true
        });
    }

    onBlur = () => {
        this.setState({
            active: false
        });
    }

    filterCountries = (event) => {
        this.setState({
            searchQuery: event.target.value
        });
    }

    componentDidUpdate = (previousProps, prevState, snapshot) => {
        if (this.state.searchQuery !== prevState.searchQuery) {
            const filteredCountries = this.state.countries.filter((country) => {
                return country.toLowerCase().includes(this.state.searchQuery.toLocaleLowerCase());
            });
            this.setState({filteredCountries: filteredCountries});
        }
    }

    render() {
        return (
            <div className={this.setClassByState()} onClick={this.searchClicked} onBlur={this.onBlur} >
                <input type="hidden" name="country"/>
                <i className="dropdown icon"></i>
                <input className="search" autoComplete="off" tabIndex="0" placeholder="Search..." onChange={this.filterCountries}/>
                <div className={this.setMenuClassByState()}  style={{display: (this.state.active) ? "block!important" : "none"}}>
                    {this.getCountries()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { countries: state.countries};
};

export default connect(mapStateToProps)(CountryList);