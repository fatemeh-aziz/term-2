import {ForcastResponse} from "@/types/api/ForcastResponse";
import {WeatherResponse} from "@/types/api/WeatherResponse";

const baseUrl="https://api.openweathermap.org/data/2.5/";
const apiKey="3dce9b1c66837262a25b3f448d354a76";


interface WeatherProps {
    city: string
}
interface ForecastProps {
    lat: number,
    lon: number
}


export async function callWeatherApi({city}:WeatherProps): Promise<WeatherResponse> {
    const response = await fetch(baseUrl+`weather?q=${city}&appid=${apiKey}&units=metric`)
    return await response.json();
}

export async function callForecastApi({lat, lon}:ForecastProps): Promise<ForcastResponse> {
    const response = await fetch(baseUrl+`onecall?lat=${lat}lon=${lon}&appid=${apiKey}&units=metric`)
    return await response.json();
}