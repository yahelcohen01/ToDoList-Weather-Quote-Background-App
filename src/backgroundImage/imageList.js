import React, { useState, useEffect } from 'react';
import ImageCard from './imageCard';
import '/Users/User/source/repos/reactproject/reactproject/src/index.css'

const ImageList = (props) => {

    //const images = props.images.map((image) => (
    //    <ImageCard key={image.id} image={image} />
    //));
    //return (
    //    <>
    //        <div className="background-image-container">{images[0]}</div>
    //        <Number />
    //    </>
    //);

    const images = props.images.map((image) => (
        <ImageCard key={image.id} image={image} />
    ));

    const [num, setNum] = useState(0);

    function randomNumberInRange(min, max) {
        // get number between min (inclusive) and max (inclusive)
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    useEffect(() => {
        const interval = setInterval(() => {
            // generate random number between 0 and 9
            setNum(randomNumberInRange(0, 9));
        }, 5000); // runs every 5 second

        return () => {
            clearInterval(interval);
        };
    }, []);
    return (
        <div>
            <div className="background-image-container">{images[parseInt(num)]}</div>
        </div>
    );
};

export default ImageList;
