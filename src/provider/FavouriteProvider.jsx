import { FavouriteContext } from "../context";
import { useLocalStorage } from "../hooks";

// eslint-disable-next-line react/prop-types
const FavouriteProvider = ({ children }) => {
  const [favourites, setFavorites] = useLocalStorage("favourites", []);

  const addToFavourites = (latitude, longitude, location) => {
    setFavorites(...favourites, { latitude, longitude, location });
  };

  const removeFavourites = (location) => {
    const restFavourites = favourites.filter(
      (fav) => fav.location !== location
    );
    setFavorites(restFavourites);
  };
  return (
    <FavouriteContext.Provider
      value={(favourites, addToFavourites, removeFavourites)}
    >
      {children}
    </FavouriteContext.Provider>
  );
};

export default FavouriteProvider;
