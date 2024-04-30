import { useContext, useEffect, useState } from "react";
import { LocationContext } from "../context";

const useWeather = () => {
  const [weatherData, setWeatherData] = useState({
    location: "",
    climate: "",
    temperature: "",
    feelsLike: "",
    maxTemperature: "",
    minTemperature: "",
    humidity: "",
    cloudPercentage: "",
    wind: "",
    time: "",
    longitude: "",
    latitude: "",
    sunrise: "",
    sunset: "",
  });
  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });
  const [error, setError] = useState(null);

  const { selectedLocation } = useContext(LocationContext);

  const fetchWeatherData = async (api) => {
    try {
      setLoading({
        ...loading,

        state: true,
        message: "Weather data fetching",
      });
      const response = await fetch(
        `https://api.openweathermap.org/${api}&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&units=metric`
      );
      if (!response.ok) {
        const errorMessage = `Fetching weather data failed: ${response.status}`;
        throw new Error(errorMessage);
      }
      const data = await response.json();

      const updateWeatherData = {
        ...weatherData,
        location: data?.name,
        climate: data?.weather[0]?.main,
        temperature: data?.main?.temp,
        feelsLike: data?.main?.feels_like,
        maxTemperature: data?.main?.temp_max,
        minTemperature: data?.main?.temp_min,
        humidity: data?.main?.humidity,
        cloudPercentage: data?.clouds?.all,
        wind: data?.wind?.speed,
        time: data?.dt,
        sunrise: data?.sys?.sunrise,
        sunset: data?.sys?.sunset,
      };
      setWeatherData(updateWeatherData);
    } catch (err) {
      setError(err);
    } finally {
      setLoading({
        ...loading,

        state: false,
        message: "",
      });
    }
  };
  useEffect(() => {
    setLoading({
      ...loading,
      state: true,
      message: "Finding Location...",
    });

    if (selectedLocation) {
      fetchWeatherData(`data/2.5/weather?q=${selectedLocation}`);
    } else {
      navigator.geolocation.getCurrentPosition(function (position) {
        fetchWeatherData(
          `geo/1.0/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}`
        );
      });
    }
    if (
      !navigator.geolocation.getCurrentPosition(function (position) {
        fetchWeatherData(
          `geo/1.0/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}`
        );
      }) &&
      !selectedLocation
    ) {
      fetchWeatherData(`data/2.5/weather?q=${"dhaka"}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedLocation]);

  return {
    weatherData,
    error,
    loading,
  };
};
export default useWeather;
