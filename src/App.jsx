import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <section>
          <WeatherBoard />
        </section>
      </main>
    </>
  );
}
