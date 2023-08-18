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
        city: "",
        wind: 0,
        humidity: 0,
        description: "",
        icon: "",
        daily: [],
       }
    );


    const getWeatherData = async (city: string) => {
        const response = await callWeatherApi({city});
        const weather={
            city:response.name,
            wind:response.wind.speed,
            humidity:response.main.humidity,
            description:response.weather[0].description,
            icon:response.weather[0].icon,
            daily:[]
        }
        setWeatherState(weather)
    }

    if (weatherState.city.length === 0) {
        getWeatherData(city)
    }


    return (
        <div className={"bg-white shadow mt-4 rounded-2xl mx-auto w-[600px] p-8 py-16"}>
            <SearchForm city={city} getWeatherData={getWeatherData}/>
            <WeatherInfo weather={weatherState}/>
            <ForecatList/>
        </div>
    )
}

