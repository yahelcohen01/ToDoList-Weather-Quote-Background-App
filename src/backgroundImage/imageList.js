import React, { useState, useEffect } from 'react';
import ImageCard from './imageCard';
import '/Users/User/source/repos/reactproject/reactproject/src/index.css'

const ImageList = (props) => {
    //mapping the images array to local var and creating image instance to each image
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
        }, 10000); // runs every 10 second

        return () => {
            clearInterval(interval);
        };
    }, []);
    return (
        <div>
            <div >{images[parseInt(num)]}</div> {/*display the background image*/ }
        </div>
    );
};

export default ImageList;
