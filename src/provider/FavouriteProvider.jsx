import { FavouriteContext } from "../context";
import { useLocalStorage } from "../hooks";

// eslint-disable-next-line react/prop-types
const FavouriteProvider = ({ children }) => {
  const [favourites, setFavourites] = useLocalStorage("favourites", []);

  const addToFavourites = (latitude, longitude, location) => {
    setFavourites([...favourites, { latitude, longitude, location }]);
  };

  const removeFavourites = (location) => {
    const restFavourites = favourites.filter(
      (fav) => fav.location !== location
    );
    setFavourites(restFavourites);
  };
  return (
    <FavouriteContext.Provider
      value={{ favourites, addToFavourites, removeFavourites }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};

export default FavouriteProvider;
