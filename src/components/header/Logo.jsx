import weatherLogo from "../../assets/weather.svg";
export default function Logo() {
  return (
    <a href="/" className="flex">
      <img className="h-9" src={weatherLogo} alt="Weather App" />
      <p>
        Weather
        <br />
        App
      </p>
    </a>
  );
}
