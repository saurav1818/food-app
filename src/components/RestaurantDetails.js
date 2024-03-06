import { useEffect, useState } from "react";
import { SPECIFIC_RESTAURANT_MENU } from "../utils/constants";
import ShimmerUi from "./ShimmerUi";
import { useParams } from "react-router-dom";
const RestaurantDetails = () => {
  const [restaurantMenu, setRestaurantMenu] = useState(null);
  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

  const { id } = useParams();
  console.log(id);

  const fetchRestaurantMenu = async () => {
    try {
      const data = await fetch(`${SPECIFIC_RESTAURANT_MENU}${id}`);
      const restaurantMenu = await data.json();
      setRestaurantMenu(restaurantMenu);
    } catch (err) {
      console.log(err);
    }
  };

  console.log("REST MENU");
  console.log(restaurantMenu);

  if (!restaurantMenu) {
    return <ShimmerUi />;
  }
  const { name, city, costForTwoMessage, areaName } =
    restaurantMenu?.data?.cards[0]?.card?.card?.info;
  const itemCards =
    restaurantMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
      ?.card?.card?.itemCards ||
    restaurantMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
      ?.card?.card.itemCards;

  console.log("ITEM CARDS");
  console.log(itemCards);

  return (
    <div>
      <h1>{name}</h1>
      <h3>{areaName + " " + city}</h3>
      <h4>{costForTwoMessage}</h4>
      <div>
        <ul>
          {itemCards.map((item) => (
            <li>
              {item.card.info.name} {" -  "}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantDetails;
