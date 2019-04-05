import React from 'react';
import Loading from './Loading';
import content from '../locale/translationsource';

class FileReading extends React.Component {
    render(){
        return (
            <div className="column twelve wide">
                <Loading text={content.loading}/>
            </div>
        );
    }
}
export default FileReading;