import React from 'react';
import WeatherIcon from "@/components/weatherIcon";

function WeatherInfo({weather}) {
    return (
        <div className={"flex justify-between mb-12"}>
            <div>
                <h1 className={"text-2xl"}>{weather.city}</h1>
                <p>{weather.description}</p>
                <p>Humidity : <span className={"text-primary"}>{weather.humidity}</span>, Wind : <span className={"text-primary"}>{weather.wind}</span></p>
            </div>
            <div>
                <WeatherIcon size={70} icon={weather.icon}/>
            </div>
        </div>
    );
}

export default WeatherInfo;