import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({product}) => {
  return (
   
   <div className="border w-full rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition p-4 bg-white">
  {/* Image with link */}
  <Link to={`/products/${product?.id}`}>
    <img
      src={product?.image}
      alt={product?.name}
      className="w-full h-48 object-cover rounded-lg mb-4"
    />
  </Link>

  {/* Product Name */}
  <h3 className="text-lg font-semibold text-gray-800 mb-1">
    {product?.name}
  </h3>

  {/* Price Section */}
  <div className="mt-2 flex items-center gap-2">
    <span className="text-[#138695] text-xl font-bold">
      {product?.new_price}
    </span>
    {product?.old_price && (
      <span className="line-through text-gray-400 text-sm">
        {product?.old_price}
      </span>
    )}
  </div>

  {/* More Details Button */}
  <Link to={`/products/${product?.id}`}>
    <button className="mt-4 w-full bg-[#138695] text-white py-2 rounded hover:bg-[#0f6e73] transition">
      More Details
    </button>
  </Link>
</div>

  )
}

export default Item
