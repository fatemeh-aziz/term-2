import React from 'react';
import {Daily} from "@/types/api/ForcastResponse";
import WeatherIcon from "@/components/weatherIcon";

interface props {
    item: Daily
}

function ForecastItem({item}: props) {
    return (
        <div className={"flex justify-center item-center flex-col"}>
            <div>{}</div>
            <WeatherIcon icon={item.weather[0].icon} size={36}/>
            <div className={"mt-3"}>
                <span className={"text-primary"}>{item.temp.min}</span>
                -
                <span className={"text-primary"}>{item.temp.max}</span>
            </div>
        </div>
    );
}

export default ForecastItem;