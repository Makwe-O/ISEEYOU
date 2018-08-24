import React from 'react';
import './FaceRecognition.css';


const FaceRecognition = ({imageUrl, box}) =>{
    return (
        <div className={'text-center top relative'}>
           
                <img id="bounding-box" alt="" src={imageUrl} width={'500px'} height={'auto'} />
                <div className={'bounding-box'} style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
            
        </div>
    )
}
export default FaceRecognition;