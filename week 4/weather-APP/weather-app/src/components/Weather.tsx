import React, {useState} from 'react';
import SearchForm from "@/components/SearchForm";
import WeatherInfo from "@/components/WeatherInfo";
import ForecatList from "@/components/ForecatList";
import {callWeatherApi} from "@/api/api";
import ForecastItem from "@/components/ForecastItem";

interface Props {
    city: string;
}

export default function Weather({city}: Props) {
    const [weatherState, setWeatherState] = useState<Weather>({
        city: city,
        wind: "",
        humidity: "",
        description: "",
        icon: "",
        daily: [],
       }
    );

    
    const getWeatherData = async ({city}: string) => {
        const response = await callWeatherApi({city});
        console.log(response)
    }

    if (weatherState.city.length === 0) {
        getWeatherData(city)
    }


    return (
        <div>
            <SearchForm/>
            <WeatherInfo/>
            <ForecatList/>
        </div>
    )
}

