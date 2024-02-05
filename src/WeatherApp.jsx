import SearchBox from './searchBox'
import InfoBox from './infoBox'
import { useState } from 'react'

export default function WeatherApp() {
    let [weatherInfo, setWeatherInfo] = useState({
        city : "Bhubaneswar",
        feelsLike: 22.84,
        humidity: 94,
        maxTemp: 22.12,
        minTemp: 22.12,
        temp: 22.12,
        weather: "mist", 
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };
    return(
        <div style={{textAlign:"center"}} >
            <h2>Weather App By Balaram</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}