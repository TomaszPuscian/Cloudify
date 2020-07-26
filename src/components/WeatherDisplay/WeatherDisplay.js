import React from "react";
import "./WeatherDisplay.css"
import ListGroup from "react-bootstrap/ListGroup";

const WeatherDisplay = ({weatherObj}) => {
    return (
        <div className="list-group">
            <ListGroup>
                <ListGroup.Item>
                    Temperatura: {weatherObj.data.instant.details.air_temperature} st. C
                </ListGroup.Item>
                <ListGroup.Item>
                    Opady: {weatherObj.data.next_1_hours.details.precipitation_amount} mm
                </ListGroup.Item>
                <ListGroup.Item>
                    Zachmurzenie: {weatherObj.data.instant.details.cloud_area_fraction} %
                </ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export {WeatherDisplay}