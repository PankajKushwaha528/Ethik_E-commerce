
import React, { useState } from 'react'
import Navbar from './Navbar'
import shoes1 from "../assets/shoes1.png";
import shoes2 from "../assets/shoes2.png";
import wallet1 from "../assets/wallet1.png";
import Belt from "../assets/Belt.png";

import { motion, AnimatePresence, easeInOut } from 'framer-motion'
import {UpdateFollower} from "react-mouse-follower"

const SlideRight = (delay) => {
  return {
    hidden: {
      opacity: 0,
      x: 100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: easeInOut,
      },
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: {
        duration: 0.2,
        ease: easeInOut,
      }
    }
  }
}



const ShoesData = [
  {
  id: 1,
  image: shoes1, // Make sure the image is imported correctly
  title: "The Duke Blue Shoes",
  subtitle: "Bold & Premium Vegan Leather",
  price: "3490",
  model: "Formal",
   bgColor: "#138695", // Rich royal blue tone
},
  {
  id: 2,
  image: Belt, // make sure to import or place this image in your assets
  title: "Indiana Belt",
  subtitle: "Sleek Vegan Leather Belt",
  price: "1190",
  model: "Accessories",
  bgColor: "#4A3F35" // A rich brown tone
},
{
  id: 3,
  image: wallet1, // Make sure to import the correct image
  title: "Klassic Blue Wallet",
  subtitle: "Compact Vegan Wallet in Navy Blue",
  price: "990",
  model: "Wallet",
  bgColor: "#365482" // A dark elegant blue tone
}
]

const Hero = () => {
  const [activeData, setActiveData] = useState(ShoesData[0]);

  const handleActiveData = (data) => {
    setActiveData(data);
  }
  return (
    <>
     <motion.section
  key={activeData.id}
  initial={{ backgroundColor: activeData.bgColor }}
  animate={{ backgroundColor: activeData.bgColor }}
  transition={{ duration: 0.8 }}
  className='min-h-screen text-white'
>
        {/* navbar component */}
        <Navbar />
        {/* Hero component */}
        <div className='container grid grid-cols-1 md:grid-cols-2 min-h-[605px] '>
          {/* data info */}
          <div className='flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px] text-white order-2 md:order-1'>
            <div className='space-y-5 text-center md:text-left'>
              <AnimatePresence mode='wait'>
                <UpdateFollower
                mouseOptions={{
                  backgroundColor:'white',
                  zIndex:9999,
                  followSpeed:0.5,
                  rotate: -720,
                  mixBlendMode: 'difference',
                  scale: 10,
                }}
                >
                <motion.h1
                  key={activeData.id}
                  variants={SlideRight(0.2)}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className='text-3xl lg:text-6xl xl:text-7xl font-bold font-handwriting text-shadow'>{activeData.title}</motion.h1>
                  </UpdateFollower>
              </AnimatePresence>
              <AnimatePresence mode='wait'>
                <motion.p
                  key={activeData.id}
                  variants={SlideRight(0.4)}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className='text-sm leading-loose text-white/80'>
                  {activeData.subtitle}
                </motion.p>
                
              </AnimatePresence>
              <AnimatePresence mode='wait'>
              <UpdateFollower
                mouseOptions={{
                  backgroundColor:activeData.bgColor,
                  zIndex:9999,
                  followSpeed: 0.5,
                  rotate: -720,
                  scale: 6,
                  backgroundElement: (
                    <div>
                      <img src={activeData.image}/>
                    </div>
                  )
                }}
                >
              <motion.button
                key={activeData.id}
                variants={SlideRight(0.6)}
                initial="hidden"
                animate="show"
                exit="exit"
                style={{color: activeData.bgColor}}
                className='px-4 py-2 bg-white inline-block font-normal rounded-md'>Order Now</motion.button>
                </UpdateFollower>
                </AnimatePresence>
              {/* list seperator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
                className='flex items-center justify-center md:justify-start gap-4 !md:mt-24 !mb-10'>
                <div className='w-20 h-[1px] bg-white'></div>
                <p className='text-sm'>TOP RECOMMENDATION</p>
                <div className='w-20 h-[1px] bg-white'></div>
              </motion.div>
              {/* image swithcer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
                className='grid grid-cols-3 gap-10'>
                {
                  ShoesData.map((data, index) => {
                    return (
                      <UpdateFollower key={index}
                      mouseOptions={{
                        backgroundColor: data.bgColor,
                        zIndex: 9999,
                        followSpeed: 0.5,
                        scale: 5,
                        text: "View Details",
                        textFontSize:'3px'
                      }}
                      >
                      <div key={data.id}
                        onClick={() => handleActiveData(data)}
                        className='cursor-pointer space-y-3 hover:scale-105 transition-all duration-200'>
                        <div className='flex justify-center'>
                          <img src={data.image} alt="" className={`w-[80px] img-shadow ${activeData.image === data.image ? "opacity-100 scale-110" : "opacity-50"}`} />
                        </div>
                        <div className='text-center !mt-6 space-y-1'>
                          <p className='text-base line-through opacity-50'>{data.price}</p>
                          <p className='text-xl font-bold'>{data.price}</p>
                        </div>
                      </div>
                      </UpdateFollower>
                    )
                  })
                }
              </motion.div>
            </div>
          </div>
          {/* hero image */}
          <div className='flex flex-col justify-end items-center relative order-1 md:order-2'>
            <AnimatePresence mode='wait'>
            <motion.img
              key={activeData.id}
              initial={{ opacity: 0, x: 100, rotate: 0 }}
              animate={{ opacity: 1, x: 0, rotate: -35 }}
              transition={{ duration: 0.8, delay: 0, ease: easeInOut }}
              exit={{
                opacity: 0,
                x: -100,
                transition: {
                  duration: 0.4,
                },
              }}
              src={activeData.image} 
              alt="" 
              className='w-[300px] md:w-[200px] lg:w-[500px] img-shadow lg:absolute lg:top-[5%] z-10' />
              </AnimatePresence>
              <AnimatePresence mode='wait'>
            <motion.div
              key={activeData.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0, ease: easeInOut }}
              className='text-white/5 text-[300px] font-poppins font-extrabold absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0'>{activeData.modal}</motion.div>
              </AnimatePresence>
          </div>
        </div>
      </motion.section>
    </>

  )
}

export default Hero




