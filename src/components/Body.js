import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import ShimmerUi from "./ShimmerUi";
import { RESTAURANTS_LIST } from "../utils/constants";
import { Link } from "react-router-dom";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const data = await fetch(RESTAURANTS_LIST);
      const restaurants = await data.json();
      setRestaurants(
        restaurants?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurants(
        restaurants?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleSearch = () => {
    const filteredRestaurants = restaurants.filter((restaurant) => {
      return restaurant.info.name.toLowerCase().includes(search.toLowerCase());
    });
    setFilteredRestaurants(filteredRestaurants);
  };

  return (
    <div className="body">
      {restaurants.length > 0 ? (
        <>
          <div>
            <input type="text" onChange={(e) => setSearch(e.target.value)} />
            <button onClick={handleSearch}>Search</button>
          </div>
          <div className="restaurantCardsContainer">
            {filteredRestaurants.map((restaurant) => (
              <Link
                key={restaurant.info.id}
                to={`/restaurant/${restaurant.info.id}`}
              >
                <RestaurantCard restaurant={restaurant} />
              </Link>
            ))}
          </div>
        </>
      ) : (
        <ShimmerUi />
      )}
    </div>
  );
};

export default Body;
