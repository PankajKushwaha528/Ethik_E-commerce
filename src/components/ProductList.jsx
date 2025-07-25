import React from 'react'
import all_product from '../Utils/all_product'
import Item from './Item'
import { motion } from 'framer-motion'

const ProductList = (props) => {
  return (
    <div className='mx-auto max-w-2xl px-4 py-12 sm:pt-24 lg:max-w-7xl lg:px-8'>
     
      <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className='text-4xl font-bold tracking-tight text-gray-900 text-center font-serif'>
              Top Sellers
          </motion.h2>
      <p className='text-center mt-3 md:px-56'>Discover Ethik's most loved vegan essentials — from handcrafted shoes to cruelty-free wallets and belts, our top picks are where style meets sustainability.</p>
      <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-10 px-6 md:px-0 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
        {all_product.map((product)=> {
            if(props.category === product.category){
                return <Item key={product.id} product={product} />
            }
        })}
      </div>
    </div>
  )
}

export default ProductList
