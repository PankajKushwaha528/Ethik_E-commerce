// import React, { createContext, useState } from "react";
// import all_product from "../Utils/all_product";

// export const ShopContext = createContext(null);

// const getDefaultCart = ()=> {
//     let cart = {};
//     for (let index= 0; index<all_product.length+1; index++){
//         cart[index] = 0
//     }
//     return cart;
// }

// const ShopContextProvider = (props) => {
//     const [cartItems, setCartItems] = useState(getDefaultCart());

//     const addToCart = (itemId) => {
//         setCartItems((prev)=> ({...prev, [itemId]:prev[itemId]+1}))
//     }

//     const removeFromCart = (itemId) => {
//         setCartItems((prev)=> ({...prev,[itemId]:prev[itemId]-1}))
//     }

//     const getTotalCartAmount = ()=> {
//         let totalAmount = 0;
//         for (const item in cartItems)
//         {
//             if(cartItems[item]>0)
//             {
//                 let itemInfo = all_product.find((product)=>product.id===Number(item))
//                 totalAmount += cartItems[item] * itemInfo.new_price;
//             }
//         }
//         return totalAmount;
//     }

//     const getTotalCartItems = ()=> {
//         let totalItem = 0;
//         for (const item in cartItems)
//         {
//             if(cartItems[item]>0)
//             {
//                 totalItem += cartItems[item]
//             }
//         }
//         return totalItem;
//     }
//     const contextValue = {all_product, cartItems, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItems};

//     return (
//         <ShopContext.Provider value={contextValue}>
//             {props.children}
//         </ShopContext.Provider>
//     )
// }

// export default ShopContextProvider

import React, { createContext, useContext, useEffect, useState } from "react";
import all_product from "../Utils/all_product";
import { toast } from 'react-toastify';
import { AuthContext } from "./AuthContext"; // adjust path



export const ShopContext = createContext(null);

// Function to generate default empty cart
const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  // Load cart from localStorage if available, else use default
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem("cartItems");
    return storedCart ? JSON.parse(storedCart) : getDefaultCart();
  });

  // Save to localStorage whenever cartItems change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Add item to cart
 const addToCart = (itemId) => {
  setCartItems((prev) => ({
    ...prev,
    [itemId]: (prev[itemId] || 0) + 1,
  }));
};

  // Remove item from cart
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    toast.info("Item removed from cart");
};

  // Clear cart (optional helper)
  const clearCart = () => {
    setCartItems(getDefaultCart());
    toast.warn("Cart cleared!");
  };

  // Calculate total cart value
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find((product) => product.id === Number(item));
        if (itemInfo) {
          totalAmount += cartItems[item] * itemInfo.new_price;
        }
      }
    }
    return totalAmount;
  };

  // Count total items in cart
  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    clearCart, // optional
    getTotalCartAmount,
    getTotalCartItems,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
