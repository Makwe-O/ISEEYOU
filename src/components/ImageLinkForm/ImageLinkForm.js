import React from 'react';
import './ImageLinkForm.css'
import {Button} from 'react-bootstrap';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) =>{
    return (
        <div className={'text-center'}>
            <div>
                <p className={'lead'}>This app will detect any face you place in it</p>
                <input type={'text'} onChange={onInputChange}/>
            </div>
            <div>
            <Button 
                bsStyle="success"
                onClick = {onButtonSubmit}
                >Locate
            </Button>
            </div>
        </div>
       
    )
}
export default ImageLinkForm;