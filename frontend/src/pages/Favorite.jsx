import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import Title from "../components/Title";

const Favorite = () => {
  const { getFavoriteProducts, currency, toggleFavorite } =
    useContext(ShopContext);
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    // Retrieve the favorite products from context
    const products = getFavoriteProducts();
    console.log("Updated favorite products:", products); // Log updated products
    setFavorite(products);
  }, [getFavoriteProducts]);

  return (
    <div className="border-t ">
      <div className="text-2xl mt-10 ">
        <Title text1={"YOUR"} text2={"FAVORITES"} />
      </div>
      {favorite.length > 0 ? (
        <div className="flex flex-wrap gap-6 pt-2 transition-opacity ease-in duration-500 opacity-100">
          {favorite.map((product) => (
            <div
              key={product._id}
              className="w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] flex flex-col border rounded-lg overflow-hidden"
            >
              <img
                src={product.image[0]}
                alt={product.name}
                className="w-full h-auto object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-medium text-xl mb-2">{product.name}</h3>
                <p className="text-gray-500 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <img
                    onClick={() => toggleFavorite(product._id)}
                    src={assets.favorite_filled_icon}
                    alt="Favorite Icon"
                    className="w-4 min-w-5 cursor-pointer"
                  />
                  <p className="text-lg font-bold">
                    {currency}
                    {product.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No favorites yet!</p>
      )}
    </div>
  );
};

export default Favorite;
