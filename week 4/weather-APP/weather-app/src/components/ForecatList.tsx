import React from 'react';
import type {ForcastResponse,Daily} from "@/types/api/ForcastResponse";
import ForecastItem from "@/components/ForecastItem";

interface Props {
    forecast:ForcastResponse
}

function ForecatList({forecast}:Props) {
    return (
        <div>
            {
                forecast.daily.map((item:Daily)=>{
                  return(

                  )
                })
            }
            <ForecastItem/>
        </div>
    );
}

export default ForecatList;