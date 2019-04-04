import React from 'react';
import CountryItem from './CountryItem';

class CountryList extends React.Component {

    componentDidMount(props) {
        const countries = props.countries || [];
        this.setState = {
            active: false,
            countries: countries,
            searchQuery: props.query || ""
        };
    }

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
        return this.state.countries.map((country, index) => {
            return <CountryItem key={index} country={country}/>
        });
    }

    render(){

        const searchClicked = () => {
            this.setState({
                active: true
            });
        }
        const onBlur = () => {
            this.setState({
                active: false
            });
        }

        const filterCountries = (event) => {
            this.setState({searchQuery: event.target.value});
            console.log(this.state.searchQuery);
        }
        return (
            <div className={this.setClassByState()} onClick={searchClicked} onBlur={onBlur} >
                <input type="hidden" name="country"/>
                <i className="dropdown icon"></i>
                <input className="search" autoComplete="off" tabIndex="0" placeholder="Search..." onChange={filterCountries}/>
                <div className={this.setMenuClassByState()}  style={{display: (this.state.active) ? "block!important" : "none"}}>
                    {this.getCountries()}
                </div>
            </div>
        );
    }
}

export default CountryList