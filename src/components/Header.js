import React from 'react';
import CountryList from './CountryList';
class Header extends React.Component {
    render() {
        return (
             <div className="column twelve wide">
                <CountryList/>
             </div>
        );
    }
}
export default Header
