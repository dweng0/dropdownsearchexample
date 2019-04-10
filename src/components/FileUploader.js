import React from 'react';
import { connect } from 'react-redux';


import {  updateWordArray } from '../actions';
import content from '../locale/translationsource';

/**
* takes a string file and breaks it down based on regex, returning an array of objects containing the name of the word and the times it has been used
* @return {Object} {name:"", timesUsed:""}
*/
const getWordsFromString = (stringFile) => {
    //find words in string by using regex
    let words = [];
    const expression = /(\w)+/igm;
    const regex = RegExp(expression);
    let resultsArray;

    //for each word, add to an array, if it is already there, increment the value
    while ((resultsArray = regex.exec(stringFile.toLowerCase())) !== null) {
            const word = resultsArray[0];
            //check if it already exists
            let existingWord =  words.find(storedWord => { return (storedWord.name === word) });
            if(existingWord)
            {
                existingWord.timesUsed++;
            }
            else
            {
                words.push({
                    name: word,
                    timesUsed: 1
                });
            }
        }
    return words;
}

class FileUploader extends React.Component {

    constructor(props) {
        super(props);
        //match all words ignoring spaces and special characters
        this.state = {
            uploadDetails: content.uploadOk
        };

        //load the file into the browser (no server required)
        this.onFileLoaded = (fileAsString, err) => {
            if(err) {
                throw err;
            }

            const words = getWordsFromString(fileAsString);
            console.log('total words', words);
            //check if the object is empty (the user uploaded an empty text file) otherwise update redux
            if(words.length === 0)
            {
                this.setState({uploadDetails: content.uploadWarning});
            }
            else
            {
                this.props.updateWordArray(words)
            }

        }

        this.getFile = (event, callback) => {
            const reader = new FileReader();

            reader.onload = (event) => {
                callback(reader.result);
            };
            reader.onerror = (error) => {
                return callback(null, error);
            }
            reader.readAsText(event.target.files[0])
        }
    }
    render(){
        return(
            <div>
                <input type="file" id="fileElem" multiple accept=".txt" className="visually-hidden"  onChange={ (event) => { this.getFile(event, this.onFileLoaded); }}/>
                <label className="ui button" htmlFor="fileElem">{content.uploadText}</label>
                <p>{this.state.uploadDetails}</p>
            </div>
        );
    }
}


export default connect(null, {updateWordArray})(FileUploader);