import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

class Dropzone extends React.Component {
    constructor(props)
    {
        super(props);

        const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop: (acceptedFiles => {
            const reader = new FileReader()

            reader.onabort = () => console.log('file reading was aborted')
            reader.onerror = () => console.log('file reading has failed')
            reader.onload = () => {
            // Do whatever you want with the file contents
            const binaryStr = reader.result
            console.log(binaryStr)
            }

            acceptedFiles.forEach(file => reader.readAsBinaryString(file))
        }, [])});

        this.getRootProps = getRootProps;
        this.getInputProps = getInputProps;
    }
  render ()
  {
       return(
            <div {...this.getRootProps()}>
            <input {...this.getInputProps()} />
            <div class="ui icon message">
                <div class="content">
                    <div class="header">
                    Drop Text file to begin
                    </div>
                    <p>Drop a text file to begin analysing words.</p>
                </div>
                </div>
            </div>
        );
  }
}

export default Dropzone;