import React from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

const WeatherTracks = ({playlist, features, sunnyWeather}) => {
    console.log("vars", sunnyWeather);
    if (!features.data || !playlist.data) {
        return null;
    }
    let allowedFeatures = [];

    if (sunnyWeather) {
        allowedFeatures = features.data.audio_features
            .filter(({energy, danceability, valence}) => energy > 0.7 && danceability > 0.7 && valence > 0.5);
    } else {
        allowedFeatures = features.data.audio_features
            .filter(({energy, danceability, valence}) => energy < 0.7 && danceability < 0.7 && valence < 0.5);
    }

    allowedFeatures = allowedFeatures.map(feature => {
        const track = playlist.data.tracks.items.find(item => {
            return  item.track.id === feature.id;
        })
        return {
            ...feature,
            track
        };
    })

    return (
        allowedFeatures.map(item => {
            return <ListGroup variant="secondary flush" as="ul">
                    <ListGroup.Item key={item.id} as="li">{item.track.track.album.artists.map(item => item.name).join(", ")} - {item.track.track.name}</ListGroup.Item>
                </ListGroup>}
            )
    )
}

export { WeatherTracks }


//<li key={item.id}>{item.track.track.album.artists.map(item => item.name).join(", ")} - {item.track.track.name}</li>)}