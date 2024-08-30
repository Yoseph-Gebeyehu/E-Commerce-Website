// ProductItem.jsx
import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";

const ProductItem = ({ id, image, name, price }) => {
  const { currency, toggleFavorite, favoriteItems } = useContext(ShopContext);
  const isFavorite = favoriteItems[id] ? true : false;

  return (
    <div>
      <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
        <div className="overflow-hidden">
          <img
            className="hover:scale-110 transition ease-in-out"
            src={image[0]}
            alt=""
          />
          <p className="pt-3 pb-1 text-sm">{name}</p>
        </div>
      </Link>
      <div className="flex justify-between">
        <img
          onClick={() => toggleFavorite(id)}
          src={isFavorite ? assets.favorite_filled_icon : assets.favorite_icon}
          alt=""
          className="w-5 min-w-5 cursor-pointer"
        />
        <p className="text-sm font-medium">
          {currency}
          {price}
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
