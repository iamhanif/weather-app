import { useContext, useEffect, useState } from "react";
import { FavouriteContext, WeatherContext } from "../../context";
import redFavIcon from "./../../assets/heart-red.svg";
import favIcon from "./../../assets/heart.svg";

export default function ToggleFavourite() {
  const { favourites, addToFavourites, removeFavourites } =
    useContext(FavouriteContext);

  const { weatherData } = useContext(WeatherContext);

  const [isFavourite, toggleFavourite] = useState(false);

  const { latitude, longitude, location } = weatherData;

  useEffect(() => {
    const found = favourites.find((fav) => fav.location === location);
    toggleFavourite(found);
  }, [favourites, location]);

  const handleFavourite = () => {
    const found = favourites.find((fav) => fav.location === location);

    if (!found) {
      addToFavourites(latitude, longitude, location);
    } else {
      removeFavourites(location);
    }
    toggleFavourite(!isFavourite);
  };

  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
          onClick={handleFavourite}
        >
          <span>Add to Favourite</span>
          <img src={isFavourite ? redFavIcon : favIcon} alt="" />
        </button>
      </div>
    </div>
  );
}
