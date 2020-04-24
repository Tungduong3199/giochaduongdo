import React from 'react';
import Files from "react-butterfiles";

function AddImage(props) {
    return (
        <Files
            multiple={true} maxSize="2mb" multipleMaxSize="10mb" accept={["application/pdf", "image/jpg", "image/jpeg"]}
            onSuccess={files => this.setState({files})}
            onError={errors => this.setState({errors})}
        >
            {({browseFiles}) => (
                <>
                    <button onClick={browseFiles}>Upload PDF</button>
                    <ol>
                        {this.state.files.map(file => (
                            <li key={file.name}>{file.name}</li>
                        ))}
                        {this.state.errors.map(error => (
                            <li key={error.file.name}>
                                {error.file.name} - {error.type}
                            </li>
                        ))}
                    </ol>
                </>
            )}
        </Files>
    );
}

export default AddImage;