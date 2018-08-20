import React from 'react';
import './ImageLinkForm.css'
import {Button} from 'react-bootstrap';

const ImageLinkForm = () =>{
    return (
        <div className={'text-center'}>
            <div>
                <p className={'lead'}>This app will detect any face you place in it</p>
                <input type={'text'} />
            </div>
            <div>
            <Button bsStyle="success">Locate</Button>
            </div>
        </div>
       
    )
}
export default ImageLinkForm;