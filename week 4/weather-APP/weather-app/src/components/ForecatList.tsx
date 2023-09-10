import React from 'react';
import type {ForcastResponse, Daily} from "@/types/api/ForcastResponse";
import ForecastItem from "@/components/ForecastItem";

interface Props {
    forecast: ForcastResponse
}

function ForecatList({forecast}: Props) {
  let day = new Date (item.dt * 1000).toLocaleString('en-us', {weekday: 'long'})
    return (
        <div className={"grid grid-cols-8"}>
            {
                forecast.daily.map((item: Daily) => {
                    return <ForecastItem item={item}/>
                })
            }
        </div>
    );
}

export default ForecatList;