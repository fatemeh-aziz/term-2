import React, {useState} from 'react';
import SearchForm from "@/components/SearchForm";
import WeatherInfo from "@/components/WeatherInfo";
import ForecatList from "@/components/ForecatList";

interface Props {
    city:string;
    
}
function Weather({city}:Props) {
    const [weatherState,setWeatherState]=useState<Weather>({
        city:"",
        wind:"",
        humidity:"",
        description:"",
        icon:"",
        daily:[],

    } );
    console.log(weatherState)
    return (
        <div>
            <SearchForm/>
            <WeatherInfo/>
            <ForecatList/>
        </div>
    );
}

export default Weather;