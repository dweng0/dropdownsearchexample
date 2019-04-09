import React from 'react';
import { connect } from 'react-redux';

import {  updateSearch } from '../actions';
import SearchListItem from './SearchListItem';

import content from '../locale/translationsource';

class SearchBox extends React.Component {

    state = {
        active: false,
        searchableArray: [],
        filteredList: [],
    }

    constructor(props){
        super(props)
        this.state.searchableArray = props.searchableArray || [];
        this.state.filteredResults = props.searchableArray || [];
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

    getsearchableArray() {
        return this.state.filteredResults.map((result, index) => {
            return <SearchListItem key={index} result={result} updateSearch={this.props.updateSearch}/>
        });
    }

    componentDidUpdate = (previousProps, prevState, snapshot) => {
        if (this.props.query !== previousProps.query) {
            const filteredResults = this.state.searchableArray.filter((country) => {
                return country.toLowerCase().includes(this.props.query.toLocaleLowerCase());
            });
            this.setState({filteredResults: filteredResults});
        }
    }

    render() {
        return (
            <div className={this.setCssClassByState()} onClick={this.searchClicked} onBlur={this.onBlur} >
                <i className="dropdown icon"></i>
                <input name="country" type="hidden" value={this.props.query} />
                <input value={this.props.query} className="search" autoComplete="off" name="country" tabIndex="0" placeholder={content.searchPlaceholder} onChange={(event) => {this.props.updateSearch(event.target.value);}}/>
                <div className={this.setMenuCssClassByState()} style={{display: (this.state.active) ? "block!important" : "none"}}>
                    {this.getsearchableArray()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        searchableArray: state.results,
        query: state.searchQuery
    };
};

export default connect(mapStateToProps, {updateSearch})(SearchBox);