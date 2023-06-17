import React, { useState, useLayoutEffect, useEffect } from 'react';
import ImageCard from './imageCard';
import ImagesList from './imageList';
import '/Users/User/source/repos/reactproject/reactproject/src/index.css'
import getImages from '/Users/User/source/repos/reactproject/reactproject/src/App'


const ImageSlider = (props) => {
    const url = props.images;
    const [currImageIndex, setCurrImageIndex] = useState(0);
    useLayoutEffect(() => {
        console.log(currImageIndex + 1 >= url.length);
        if (currImageIndex + 1 > url.length) {
            setCurrImageIndex(0);
        }
    }, [currImageIndex]);

    useEffect(() => {
        const id = setInterval(() => {
            setCurrImageIndex((oldCount) => oldCount + 1);
        }, 5000);
        return () => clearInterval(id);
    }, []);

    return (
        <div>
            <ImagesList getImages={props.getImages} images={props.state.images} index={currImageIndex}/>
        </div>
    );
}

export default ImageSlider;