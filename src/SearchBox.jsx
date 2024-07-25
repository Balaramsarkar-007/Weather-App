import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import confguration from '../conf.js';  // Ensure `API_KEY` is correct here

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    let weatherInfo = async () => {
        try {
            let response = await fetch(`${confguration.ApiUrl}?q=${city}&appid=${confguration.ApiKey}&units=metric`);
            let jsonResponse = await response.json();

            if (jsonResponse.cod !== 200) {  // Check if the response contains an error code
                throw new Error(jsonResponse.message);
            }

            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                maxTemp: jsonResponse.main.temp_max,
                minTemp: jsonResponse.main.temp_min,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            }
            return result;
        } catch (error) {
            throw error;
        }
    }

    let handleChange = (evt) => {
        setCity(evt.target.value);
    }

    let handleSubmit = async (evt) => {
        evt.preventDefault();
        setError(false);
        setCity("");
        try {
            let newInfo = await weatherInfo();
            updateInfo(newInfo);
        } catch (error) {
            setError(true);
            alert("No such place exists! Try another place.");
        }
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Search for Weather</h2>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City name" variant="outlined" value={city} onChange={handleChange} />
                <br /><br />
                <Button variant="contained" type="submit">
                    Search
                </Button>
                {
                    error && <h3 style={{ color: "red" }}>No such place exists!</h3>
                }
            </form>
        </div>
    )
}
