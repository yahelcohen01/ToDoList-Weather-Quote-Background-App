import React from 'react';
import '/Users/User/source/repos/reactproject/reactproject/src/index.css'

//function represent the weather card
const Weather = props =>
    <div className='card'>
        <h3>Weather in: </h3>
        <h4 className="h4">{props.city}</h4>

        <h3>Temperature: </h3>
        <h4 className="h4">{props.temp}</h4>

        <h3>Sky: </h3>
        <h4 className="h4">{props.clouds}</h4>
    </div>

export default Weather;