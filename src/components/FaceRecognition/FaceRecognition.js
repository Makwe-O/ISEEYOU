import React from 'react';
import './FaceRecognition.css';


const FaceRecognition = ({imageUrl}) =>{
    return (
        <div className={'text-center top'}>
            <img alt="" src={imageUrl} width={'500px'} height={'auto'}/>
        </div>
    )
}
export default FaceRecognition;