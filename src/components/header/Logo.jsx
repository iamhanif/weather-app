import weatherLogo from "../../assets/weather.svg";
export default function Logo() {
  return (
    <a href="/" className="flex items-center">
      <img className="h-9" src={weatherLogo} alt="Weather App" />
      <p className="text-sm leading-none mx-2 text-gray-200 hidden sm:block">
        Weather
        <br />
        App
      </p>
    </a>
  );
}
