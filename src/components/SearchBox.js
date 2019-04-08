import React from 'react';
import { connect } from 'react-redux';

import {  updateSearch } from '../actions';
import SearchItem from './SearchItem';

import content from '../locale/translationsource';

class SearchBox extends React.Component {

    state = {
        active: false,
        items: [],
        filteredList: [],
    }

    constructor(props){
        super(props)
        this.state.items = props.items || [];
        this.state.filteredItems = props.items || [];
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

    getItems() {
        return this.state.filteredItems.map((item, index) => {
            return <SearchItem key={index} item={item} updateSearch={this.props.updateSearch}/>
        });
    }

    componentDidUpdate = (previousProps, prevState, snapshot) => {
        if (this.props.query !== previousProps.query) {
            const filteredItems = this.state.items.filter((item) => {
                return item.toLowerCase().includes(this.props.query.toLocaleLowerCase());
            });
            this.setState({filteredItems: filteredItems});
        }
    }

    render() {
        return (
            <div className={this.setCssClassByState()} onClick={this.searchClicked} onBlur={this.onBlur} >
                <i className="dropdown icon"></i>
                <input name="item" type="hidden" value={this.props.query} />
                <input value={this.props.query} className="search" autoComplete="off" name="item" tabIndex="0" placeholder={content.searchPlaceholder} onChange={(event) => {this.props.updateSearch(event.target.value);}}/>
                <div className={this.setMenuCssClassByState()} style={{display: (this.state.active) ? "block!important" : "none"}}>
                    {this.getItems()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
        query: state.searchQuery
    };
};

export default connect(mapStateToProps, {updateSearch})(SearchBox);