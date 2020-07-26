import React, {useEffect, useState} from "react";
import WeatherApiFetch from "../WeatherApiFetch";

const UserLocalization = () => {
    const [latitude, setLatitude] = useState('');
    const [longtitude, setLongtitude] = useState('');

    const success = (position) => {
        const userLatitude = position.coords.latitude;
        const userLongtitude = position.coords.longitude;

        setLatitude(userLatitude);
        setLongtitude(userLongtitude)
    }

    const error = () => {
        alert('Cloudify have failed to obtain your location. Let Cloudify get your position or write it in the search field below');
    }
    useEffect(()=> {
        navigator.geolocation.getCurrentPosition(success, error, {
            maximumAge: 0,
            enableHighAccuracy: true,
            timeout: 5000,
            frequency:5000
        })
    },[])

    if (!latitude || !longtitude) {
        return null
    } else {
        console.log(latitude, longtitude);
        return (
            <WeatherApiFetch latitude={latitude} longtitude={longtitude}/>
        )
    }
}

export {UserLocalization}