
import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { AuthContext } from '../context/AuthContext';
import { Star } from 'lucide-react';
import { toast } from 'react-toastify';

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);
  const { user } = useContext(AuthContext);
  const [mainImage, setMainImage] = useState(product.image);

  const handleAddToCart = () => {
    if (!user) {
      toast.error("Please login to add items to cart!");
      return;
    }
    addToCart(product.id);
    toast.success("Item added to cart!");
  };

  return (

    <div className='px-4'>
         <div className="max-w-7xl mx-auto px-6 md:px-0 my-20 grid grid-cols-1 md:grid-cols-2 gap-10">

  {/* 🖼 Left - Product Image Gallery */}
  <div className="flex gap-6">
    {/* Thumbnail Images */}
    <div className="flex flex-col gap-4">
      {[product.image, product.image1, product.image2, product.image3].map((img, i) => (
        <img
          key={i}
          onClick={() => setMainImage(img)}
          src={img}
          alt={`product-${i}`}
          className="w-[80px] md:w-[100px] h-[75px] md:h-[100px] object-cover rounded-lg border cursor-pointer hover:shadow-lg transition"
        />
      ))}
    </div>

    {/* Main Image */}
    <div className="flex-1">
      <img
        src={mainImage}
        alt="Main Product"
        className="w-full md:w-[450px] h-auto max-h-[550px] object-contain rounded-xl shadow-md border"
      />
    </div>
  </div>

  {/* 📝 Right - Product Information */}
  <div className="flex flex-col space-y-6">

    {/* Title */}
    <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">{product.name}</h1>

    {/* Ratings */}
    <div className="flex items-center gap-1 text-lg text-gray-700">
      {[...Array(4)].map((_, i) => (
        <Star key={i} fill="#138695" />
      ))}
      <Star fill="gray" />
      <span className="ml-2">(122 reviews)</span>
    </div>

    {/* Price */}
    <div className="flex items-center gap-4 text-2xl font-bold">
      <span className="line-through text-gray-400">{product.old_price}</span>
      <span className="text-[#138695] text-3xl">{product.new_price}</span>
    </div>

    {/* Description */}
    <p className="text-gray-600 leading-relaxed">{product.description}</p>

    {/* Size Selection */}
    <div>
      <h2 className="text-lg font-semibold text-gray-700 mb-2">Select Size</h2>
      <div className="flex flex-wrap gap-3">
        {["UK 7", "UK 8", "UK 9", "UK 10", "UK 11"].map((size, index) => (
          <div
            key={index}
            className="border px-4 py-2 bg-gray-100 rounded-md cursor-pointer hover:bg-gray-200 transition"
          >
            {size}
          </div>
        ))}
      </div>
    </div>

    {/* Add to Cart Button */}
    <button
      onClick={handleAddToCart}
      className="bg-[#138695] hover:bg-[#0f6e73] transition text-white font-semibold px-6 py-3 rounded-md w-max"
    >
      ADD TO CART
    </button>

    {/* Additional Info */}
    <div className="text-gray-600 space-y-1">
      <p><span className="font-semibold">Category:</span> Formal, Meeting, Office</p>
      <p><span className="font-semibold">Tags:</span> Modern, Latest</p>
    </div>
  </div>
</div>
    </div>
   

  );
};

export default ProductDisplay;
