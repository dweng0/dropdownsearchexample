import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import logo from '../assets/images/logo.png';
import ContentProvider from '../constants/contentprovider';
import { Redirect } from "react-router-dom";
const content = ContentProvider.dropzone;

function DropZone() {
/**
 * @param {Object} files only accepts json type files and only one at a time
 */

let hookState = {
  loading: false,
  error: false,
  loaded: false,
  fileContents:{},
  message: ""
}
const fileIsAcceptable = (files) => {
  return (files.length === 1 && files[0].type === "application/json")
};

  const renderRedirect = () => {
    return <Redirect to='/schema' />
  };

  const onDrop = useCallback(acceptedFiles => {
    if(fileIsAcceptable(acceptedFiles))
    {
        const file = acceptedFiles[0];
        const reader = new FileReader()
        reader.onloadstart =() =>{ hookState.loading = true;}
        reader.onabort = () => {hookState.error = true; hookState.message = content.loadError}
        reader.onerror = (err) => {hookState.error = true; hookState.message = content.loadError}
        reader.onload = (event) => {
          debugger
            hookState.fileContents = JSON.parse(reader.result);
            hookState.loaded = true;
            console.log(hookState.fileContents);
            return renderRedirect();
        }
        reader.readAsText(file);
    }
    else
    {
        hookState.error = true;
        hookState.message =content.fileAcceptError
    }
  }, [])
  // eslint-disable-next-line
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
      <div className="column twelve wide">
        <div {...getRootProps()}>
        <input {...getInputProps()} />
        <div className="ui large image">
            <img src={logo} className="App-logo" alt="logo" />
        </div>

        <p  className="App-link">
            {content.prompt}
        </p>
        </div>
    </div>
  )
}
export default DropZone;