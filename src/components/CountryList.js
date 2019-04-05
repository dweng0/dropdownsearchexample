import React from 'react';
import { connect } from 'react-redux';
import {  updateSearch } from '../actions';
import CountryItem from './CountryItem';

class CountryList extends React.Component {

    state = {
        active: false,
        countries: [],
        filteredList: [],
    }

    constructor(props){
        super(props)
        this.state.countries = props.countries || [];
        this.state.filteredCountries = props.countries || [];
    }

    setCssClassByState() {
        let style = "ui fluid search selection dropdown";
        if(this.state.active)
        {
            style += " active visible";
        }
        return style;
    }

    setMenuCssClassByState() {
        let style = "menu";
        if(this.state.active)
        {
            style += " transition visible"
        }
        return style;
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

    getCountries() {
        return this.state.filteredCountries.map((country, index) => {
            return <CountryItem key={index} country={country} updateSearch={this.props.updateSearch}/>
        });
    }

    componentDidUpdate = (previousProps, prevState, snapshot) => {
        if (this.props.query !== previousProps.query) {
            const filteredCountries = this.state.countries.filter((country) => {
                return country.toLowerCase().includes(this.props.query.toLocaleLowerCase());
            });
            this.setState({filteredCountries: filteredCountries});
        }
    }

    render() {
        return (
            <div className={this.setCssClassByState()} onClick={this.searchClicked} onBlur={this.onBlur} >
                <i className="dropdown icon"></i>
                <input name="country" type="hidden" value={this.props.query} />
                <input value={this.props.query} className="search" autoComplete="off" name="country" tabIndex="0" placeholder="Search..." onChange={(event) => {this.props.updateSearch(event.target.value);}}/>
                <div className={this.setMenuCssClassByState()} style={{display: (this.state.active) ? "block!important" : "none"}}>
                    {this.getCountries()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { 
        countries: state.countries,
        query: state.searchQuery
    };
};

export default connect(mapStateToProps, {updateSearch})(CountryList);