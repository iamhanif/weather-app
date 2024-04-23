import { useContext } from "react";
import CloudIcon from "../../assets/cloud.svg";
import HazeIcon from "../../assets/haze.svg";
import SnowIcon from "../../assets/icons/snow.svg";
import SunnyIcon from "../../assets/icons/sunny.svg";
import RainyIcon from "../../assets/rainy.svg";
import ThunderIcon from "../../assets/thunder.svg";

import pinIcon from "../../assets/pin.svg";
import { WeatherContext } from "../../context";
import { getFormattedDate } from "../../utils/date-util";

export default function WeatherHeadline() {
  const { weatherData } = useContext(WeatherContext);

  const { climate, location, temperature, time, feelsLike } = weatherData;

  console.log(CloudIcon, HazeIcon, RainyIcon, SunnyIcon, ThunderIcon, SnowIcon);

  return (
    <div>
      <div className="max-md:flex items-center justify-between md:-mt-10">
        <img src={CloudIcon} alt={climate} />
        <div className="max-md:flex items-center max-md:space-x-4">
          <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
            {Math.round(temperature)}°
          </h1>

          <p className="text-sm lg:text-lg space-x-4 md:mb-4">
            Feels Like: {Math.round(feelsLike)}°
          </p>
          <div className="flex items-center space-x-4 md:mb-4">
            <img src={pinIcon} alt="pin" />
            <h2 className="text-2xl lg:text-[50px]">{location}</h2>
          </div>
        </div>
      </div>
      <p className="text-sm lg:text-lg">
        {getFormattedDate(time, "time", false)} -{" "}
        {getFormattedDate(time, "date", false)}
      </p>
    </div>
  );
}
