import React from "react";
import {SpotifyApiFetch} from "../SpotifyApiFetch";


const WeatherForSpotify = ({weatherObj}) => {
    console.log("bbbb", weatherObj)

    const sunnyWeather = weatherObj.data.instant.details.air_temperature > 15 &&
        weatherObj.data.instant.details.cloud_area_fraction < 80 &&
        weatherObj.data.next_1_hours.details.precipitation_amount <= 0.05

    return (
        <>
            <SpotifyApiFetch sunnyWeather={sunnyWeather} />
        </>
        )
}

export {WeatherForSpotify}













// const rainyWeather = weatherObj.data.instant.details.cloud_area_fraction > 80 && weatherObj.data.next_1_hours.details.precipitation_amount > 7.5

// const cloudyWeather = weatherObj.data.instant.details.air_temperature < 20 && weatherObj.data.instant.details.cloud_area_fraction > 90 && weatherObj.data.next_1_hours.details.precipitation_amount < 7.5

// if (sunnyWeather) {
//     featuresFilterd = (features) => features.data ? features.data.audio_features
//         .filter(({energy, danceability, tempo, valence}) => energy > 0.7 && danceability > 0.65 && tempo > 125 && valence > 0.7) : null
// }
// if (rainyWeather){
//     featuresFilterd = (features) => features.data ? features.data.audio_features
//         .filter(({energy, danceability, tempo, valence}) => energy < 0.45 && danceability < 0.5 && tempo < 120 && valence < 0.2) : null
// }
// if (cloudyWeather) {
//     featuresFilterd = (features) => features.data ? features.data.audio_features
//         .filter(({energy, danceability, tempo, valence}) => (energy < 0.7 && energy > 0.45) && (danceability < 0.6 && danceability >= 0.5) && (tempo > 120 && tempo < 140) && (valence > 0.2 && valence < 0.5)) : null
// }
//&& weatherObj.data.instant.details.cloud_area_fraction < 80 && weatherObj.data.next_1_hours.details.precipitation_amount < 5
//(weatherObj.data.instant.details.air_temperature > 5 && weatherObj.data.instant.details.air_temperature < 18) &&
//