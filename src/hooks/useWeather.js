import { useState } from "react";
import { getCurrentWeather, getCurrentWeatherByCoords, getWeatherForecast } from "../services/weatherAPI";

export const useWeather = () => {
    const [CurrentWeather, setCurrentWeather] = useState(null);
    const [forecast, setForecast] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [unit, setUnits] = useState("C");

    const fetchWeatherByCity = async (city) => {
        setLoading(true);
        setError(null);

        try {
            const [WeatherData, forecast] = await Promise.all([getCurrentWeather(city), getWeatherForecast(city)]);

            setCurrentWeather(weatherData);
            setForecast(foreCast);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Failed to fetch weather data");
        } finally {
            setLoading(false);
        }
    };
    const fetchWeatherByLocation = async () => {
        if (!navigator.geolocation) {
            setError("GeoLocation is not supported by this browser");
        }

        setLoading(true);
        setError(null);

        Navigation.geolocation.getCurrentWeather(
            async (position) => {
                try {
                    const { latitude, longitude } = position.coords;
                    const weatherData = await getCurrentWeatherByCoords(latitude, longitude);
                    setCurrentWeather(weatherData);

                    // ts fetch forecast for current location
                    const forecastData = await getWeatherForecast(weatherData.name);
                    setForecast(forecastData);
                } catch (err) {
                    setError(err instanceof Error ? err.message : "Failed to fetch weather data");
                } finally {
                    setLoading(false);
                }
            },
            (error) => {
                setError("unable to retrieve your location");
                setLoading(false);
            }
        );
    };

    const toggleUnit = () => {
        setUnits(unit === "C" ? "F" : "C");
    };

    // load default weather on mount
    userEffect(() => {
        fetchWeatherByCity("New York");
    });

    return {
        currentWeather,
        forecast,
        loading,
        error,
        unit,
        fetchWeatherByCity,
        fetchWeatherByLocation,
        toggleUnit,
    };
};
