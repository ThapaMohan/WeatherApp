import React, { useState } from "react";
import axios from "axios";
import Input from "./Input";
import Button from "./Button";
import Card, { CardContent } from "./Card";
import "./WeatherApp.css";

const WeatherApp = () => {
    const [location, setLocation] = useState("");
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);

    const fetchWeather = async () => {
        try {
            const response = await axios.get(
                `http://api.weatherapi.com/v1/current.json?key=764c81e08dc44f908fd154846252002&q=${location}&aqi=yes`
            );
            setWeather(response.data);
            setError(null);
        } catch (err) {
            setError("Could not fetch weather data. Please try again.");
            setWeather(null);
        }
    };

    return (
        <div className="weather-container">
            <h1>Weather App</h1>
            <div className="flex space-x-2 mb-4">
                <Input
                    type="text"
                    placeholder="Enter location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="input-field"
                />
                <Button onClick={fetchWeather} className="button">
                    Get Weather
                </Button>
            </div>
            {error && <p className="text-red-500">{error}</p>}
            {weather && (
                <Card className="weather-card">
                    <CardContent>
                        <h2>{weather.location.name}, {weather.location.country}</h2>
                        <p>Temperature: {weather.current.temp_c}°C</p>
                        <p>Condition: {weather.current.condition.text}</p>
                        <img src={weather.current.condition.icon} alt="weather icon" className="weather-icon" />
                    </CardContent>
                </Card>
            )}
        </div>

    );
};

export default WeatherApp;
