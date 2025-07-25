import React from 'react'
import all_product from '../Utils/all_product'
import Item from './Item'
import { motion } from 'framer-motion'

const ProductList = (props) => {
  return (


<div className="mx-auto max-w-7xl px-4 py-12 sm:pt-24 lg:px-8">

  {/* Heading with Framer Motion */}
  <motion.h2
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
    className="text-4xl font-bold tracking-tight text-gray-900 text-center font-serif"
  >
    Top Sellers
  </motion.h2>

  {/* Subheading */}
  <p className="text-center mt-3 text-gray-600 md:px-56 text-sm md:text-base">
    Discover Ethik's most loved vegan essentials — from handcrafted shoes to cruelty-free wallets and belts, our top picks are where style meets sustainability.
  </p>

  {/* Product Grid */}
  <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
    {all_product.map((product) => (
      props.category === product.category && (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Item product={product} />
        </motion.div>
      )
    ))}
  </div>
</div>

  )
}

export default ProductList
