import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { X } from 'lucide-react'
import EmptyCart from '../assets/EmptyCart.png'
import { Link } from 'react-router-dom'

const Cart = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const { getTotalCartItems, all_product, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext)

  return (
    
    <div className="bg-gray-50 min-h-screen">
  <div className="max-w-7xl mx-auto my-10 p-4 sm:p-6 lg:p-8 bg-white rounded-xl shadow-md">
    {getTotalCartItems() === 0 ? (
      <div className="flex items-center justify-center py-20">
        <img src={EmptyCart} alt="Empty Cart" className="w-80" />
      </div>
    ) : (
      <div>
        {/* Table Headings */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-[0.5fr,2fr,1fr,1fr,1fr,0.5fr] items-center text-sm font-semibold text-gray-600 px-4 pb-2">
          <p>Product</p>
          <p>Title</p>
          <p className="hidden md:block">Price</p>
          <p className="hidden md:block">Quantity</p>
          <p className="hidden md:block">Total</p>
          <p className="hidden md:block">Remove</p>
        </div>
        <hr className="my-2 border-gray-300" />

        {/* Cart Items */}
        {all_product.map((e) => {
          if (cartItems[e.id] > 0) {
            return (
              <div key={e.id}>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-[0.5fr,2fr,1fr,1fr,1fr,0.5fr] items-center px-4 py-3 text-sm md:text-base text-gray-700 gap-2 bg-gray-50 rounded-md mb-2">
                  <img src={e.image} className="h-16 w-16 rounded-md object-cover" alt={e.name} />
                  <p className="truncate">{e.name}</p>
                  <p className="hidden md:block">₹{e.new_price}.00</p>
                  <div className="flex items-center justify-start md:justify-center">
                    <button className="w-16 h-10 border rounded-md bg-white text-center">
                      {cartItems[e.id]}
                    </button>
                  </div>
                  <p className="hidden md:block">₹{e.new_price * cartItems[e.id]}.00</p>
                  <X onClick={() => removeFromCart(e.id)} className="cursor-pointer hover:text-red-600" />
                </div>
              </div>
            );
          }
          return null;
        })}

        {/* Cart Summary & Promo Section */}
        <div className="flex flex-col lg:flex-row gap-10 mt-10">
          
          {/* Cart Totals */}
          <div className="flex-1 bg-white p-6 border rounded-xl shadow-sm">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Cart Totals</h2>
            <div className="space-y-4 text-gray-700">
              <div className="flex justify-between">
                <p>Subtotal</p>
                <p>₹{getTotalCartAmount()}.00</p>
              </div>
              <div className="flex justify-between">
                <p>Shipping Fee</p>
                <p className="text-green-600 font-medium">Free</p>
              </div>
              <hr className="border-gray-300" />
              <div className="flex justify-between text-lg font-semibold">
                <p>Total</p>
                <p>₹{getTotalCartAmount()}.00</p>
              </div>
              <Link to="#">
                <button className="mt-4 w-full lg:w-64 h-14 bg-[#138695] hover:bg-[#0f6e73] transition text-white font-semibold text-lg rounded-md">
                  PROCEED TO CHECKOUT
                </button>
              </Link>
            </div>
          </div>

          {/* Promo Code Section */}
          <div className="flex-1 p-6 border rounded-xl shadow-sm bg-white">
            <p className="text-lg font-semibold text-gray-700">Have a promo code?</p>
            <div className="mt-4 flex w-full max-w-md">
              <input
                type="text"
                placeholder="Enter promo code"
                className="flex-1 h-14 p-3 rounded-l-md bg-gray-100 focus:outline-none"
              />
              <button className="h-14 px-6 bg-gray-800 text-white font-semibold rounded-r-md hover:bg-gray-900 transition">
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
</div>

  )
}

export default Cart
