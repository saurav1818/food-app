import { CLOUDINARY_IMAGE_URL } from "../utils/constants";
const RestaurantCard = ({ restaurant }) => {
  const { name, costForTwo, cloudinaryImageId, avgRating, areaName } =
    restaurant.info;

  return (
    <div className="restaurantCard">
      <img
        src={`${CLOUDINARY_IMAGE_URL}${cloudinaryImageId}`}
        className="restaurantImage"
      />
      <h3>{name}</h3>
      <h4>{areaName}</h4>
      <h5>{avgRating}</h5>
      <h5>{costForTwo}</h5>
    </div>
  );
};

export default RestaurantCard;
