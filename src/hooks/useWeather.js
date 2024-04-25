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

  const fetchWeatherData = async (latitude, longitude) => {
    try {
      setLoading({
        ...loading,

        state: true,
        message: "Weather data fetching",
      });
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${
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
        longitude,
        latitude,
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

    if (selectedLocation.latitude && selectedLocation.longitude) {
      fetchWeatherData(selectedLocation.latitude, selectedLocation.longitude);
    } else {
      navigator.geolocation.getCurrentPosition(function (position) {
        fetchWeatherData(position.coords.latitude, position.coords.longitude);
      });
    }

    // {

    //   navigator.geolocation.getCurrentPosition(function (position) {
    //     fetchWeatherData(position.coords.latitude, position.coords.longitude);
    //   });
    // }

    if (
      !navigator.geolocation.getCurrentPosition(function (position) {
        fetchWeatherData(position.coords.latitude, position.coords.longitude);
      }) &&
      !selectedLocation.latitude
    ) {
      fetchWeatherData(23.750209710182087, 90.34542589506421);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedLocation.latitude, selectedLocation.longitude]);

  return {
    weatherData,
    error,
    loading,
  };
};
export default useWeather;
