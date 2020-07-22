import React, {useEffect, useState} from "react";
import WeatherForSpotify from "../WeatherForSpotify";
import WeatherDisplay from "../WeatherDisplay";
import "./WeatherApiFetch.css"


const WeatherApiFetch = ({latitude, longtitude}) => {
    const [weatherObj, setWeatherObj] = useState('');


    useEffect(() => {
        fetch(`https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${latitude}&lon=${longtitude}`)
            .then(response => response.json())
            .then(data => setWeatherObj(data.properties))
    }, [])

    if (!weatherObj) {
        return <div className="loading-screen">
            LOADING
        </div>
    } else {
        const currDate = new Date();
        currDate.setHours(currDate.getHours() - 1);
        const currTime = currDate.getTime();
        const weatherObjectReady = weatherObj.timeseries.find((item) => {
            return new Date(item.time).getTime() > currTime;
        })
        return (
            <>
                <WeatherDisplay weatherObj={weatherObjectReady}/>
                <div className="playlist">Playlist for you:</div>
                <WeatherForSpotify weatherObj={weatherObjectReady}/>
            </>
    )}
}


export {WeatherApiFetch}

