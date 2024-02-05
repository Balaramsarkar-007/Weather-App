import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_kye = "3f42e1df356642a2a5fe6a4d9a2c4c35";

    let weatherInfo = async () => {
        try {
            let respose = await fetch(`${API_URL}?q=${city}&appid=${API_kye}&units=metric`);
            let jsonResponse = await respose.json();

            let result = {
            city: city,
            temp : jsonResponse.main.temp,
            maxTemp : jsonResponse.main.temp_max,
            minTemp : jsonResponse.main.temp_min,
            humidity : jsonResponse.main.humidity,
            feelsLike : jsonResponse.main.feels_like,
            weather : jsonResponse.weather[0].description,
        }
        console.log(result);
        return result;}
        catch (error) {
            throw(error);
        }
    } 

    let handelChange = (evt) => {
        setCity(evt.target.value);
    }

    let handelSubmit = async (evt) => {
        try {
            evt.preventDefault();
            //console.log(city);
            setCity("");
            let newInfo = await weatherInfo();
            updateInfo(newInfo);
        }
        catch (error){
            setError(true);
            alert("No such place exits! Try another Place");
            
        }
    }


    return(
        <div style={{textAlign:"center"}} >
            <h2>Search for Weather</h2>
            <form onSubmit={handelSubmit}>
            <TextField id="city" label="City name" variant="outlined" value={city} onChange={handelChange}/>
            <br></br><br></br>
            <Button variant="contained" type="submit">
            Search
            </Button>
            {/* {
                error && <h3 style={{color: "red"}}>No such place exits!</h3> 
            } */}
            </form>
        </div>
    )
            
}