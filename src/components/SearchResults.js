import React from 'react';

class SearchResults extends React.Component {

    render(){
        return (
            <div className="ui middle aligned animated list">
                <div className="item">
                    <img className="ui avatar image" src="/images/avatar/small/helen.jpg"/>
                    <div className="content">
                    <div className="header">Helen</div>
                    </div>
                </div>
                <div className="item">
                    <img className="ui avatar image" src="/images/avatar/small/christian.jpg"/>
                    <div className="content">
                    <div className="header">Christian</div>
                    </div>
                </div>
                <div className="item">
                    <img className="ui avatar image" src="/images/avatar/small/daniel.jpg"/>
                    <div className="content">
                    <div className="header">Daniel</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchResults;