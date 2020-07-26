import React, {useEffect, useState} from "react";
import {Playlist, SpotifyApiContext, TrackFeatures} from "react-spotify-api";
import {exampleList} from "../List/List";
import WeatherTracks from "../WeatherTracks";

const SpotifyApiFetch = ({sunnyWeather}) => {
    const [token, setToken] = useState('');

    useEffect(() => {

        fetch("https://accounts.spotify.com/api/token?grant_type=client_credentials", {
            method: "POST",
            headers: {
                Authorization: "Basic " + btoa("016e9c15a9094590acbf82803e2d4725:576c77f27dd24fb4ab3946517ec28c25"),
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
            .then(response => response.json())
            .then(data => {
                setToken(data.access_token);
            });
    }, []);

    if (!token) {
        return null
    }
    return (
        <>
            <SpotifyApiContext.Provider value={token}>
                <Playlist id="37i9dQZF1DX6gb9mP6Vy34">
                    {(playlist) => (
                        playlist.data ? <><TrackFeatures id={playlist.data.tracks.items.map(item => item.track.id)}>

                            {(features) => {
                               return (<WeatherTracks
                                   playlist={playlist}
                                   features={features}
                                   sunnyWeather={sunnyWeather}
                               />)
                            }}
                        </TrackFeatures> </>: null
                    )}
                </Playlist>
            </SpotifyApiContext.Provider>

        </>
    )
}
// <ul>{playlist.data.tracks.items.map(item => <li key={item.track.id}>{item.track.name}</li> )}</ul> : null
//<div>{console.log(playlist.data.tracks.items.track.id)}</div>
export {SpotifyApiFetch}