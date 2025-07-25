import React from 'react'
import { motion } from 'framer-motion'

// Example judge data
const judges = [
  {
    id: 1,
    name: 'Peyush Bansal',
    title: 'Co-Founder, Lenskart',
    image: 'https://ethikonline.com/cdn/shop/files/Peyush_Bansal_Ethik_Vegan_Shoes_1_100x100.progressive.jpg',
    message: "The product are extremely good. Ethik's focus on vegan materials is a game-changer.",
  },
  {
    id: 2,
    name: 'Aman Gupta',
    title: 'Co-Founder, boAt',
    image: 'https://ethikonline.com/cdn/shop/files/Aman_Gupta_Ethik_Vegan_Shoes_100x100.progressive.jpg',
    message: "The quality of product is top-notch. Ethik's commitment to vegan fashion is inspiring.",
  },
  {
    id: 3,
    name: 'Namita Thapar',
    title: 'Executive Director, Emcure',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Namita_Thapar.jpg/500px-Namita_Thapar.jpg',
    message: "A premium brand with a strong purpose. I love the cruelty-free concept!",
  },
  {
    id: 4,
    name: 'Anupam Mittal',
    title: 'Founder, Shaadi.com',
    image: 'https://ethikonline.com/cdn/shop/files/Anupam_Mittal_Ethik_Vegan_Shoes_d2c6d58e-0f0e-44f5-8a3f-93e4946c344b_100x100.progressive.jpg',
    message: "Craftsmanship and ethics combined. Ethik is setting a new standard in fashion.",
  },
  {
    id: 5,
    name: 'Peyush Bansal',
    title: 'Co-Founder, Lenskart',
    image: 'https://ethikonline.com/cdn/shop/files/Peyush_Bansal_Ethik_Vegan_Shoes_1_100x100.progressive.jpg',
    message: "The product are extremely good. Ethik's focus on vegan materials is a game-changer.",
  },
  {
    id: 6,
    name: 'Aman Gupta',
    title: 'Co-Founder, boAt',
    image: 'https://ethikonline.com/cdn/shop/files/Aman_Gupta_Ethik_Vegan_Shoes_100x100.progressive.jpg',
    message: "The quality of product is top-notch. Ethik's commitment to vegan fashion is inspiring.",
  },
  {
    id: 7,
    name: 'Namita Thapar',
    title: 'Executive Director, Emcure',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Namita_Thapar.jpg/500px-Namita_Thapar.jpg',
    message: "A premium brand with a strong purpose. I love the cruelty-free concept!",
  },
  {
    id: 8,
    name: 'Anupam Mittal',
    title: 'Founder, Shaadi.com',
    image: 'https://ethikonline.com/cdn/shop/files/Anupam_Mittal_Ethik_Vegan_Shoes_d2c6d58e-0f0e-44f5-8a3f-93e4946c344b_100x100.progressive.jpg',
    message: "Craftsmanship and ethics combined. Ethik is setting a new standard in fashion.",
  },
]

const EthikSharkTank = () => {
  return (
    <div className="bg-gray-950 py-16 px-4 md:px-16 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-12">
        {/* <h2 className="text-3xl md:text-5xl font-bold mb-4">Ethik on Shark Tank India</h2> */}
        <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-white mb-6"
          >
           Ethik on Shark Tank India
          </motion.h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Discover how Ethik impressed India's top investors with its bold vision and ethical fashion.
        </p>
      </div>

      {/* Marquee Section */}
      <div className="relative w-full overflow-x-hidden">
        <div className="flex animate-marquee space-x-8">
          {judges.map((judge) => (
           <div className="bg-white text-gray-900 rounded-lg p-4 shadow-lg w-72 mx-4 flex-shrink-0">
  <img
    src={judge.image}
    alt={judge.name}
    className="w-24 h-24 mx-auto rounded-full object-cover border-2 border-white shadow"
  />
  <p className="mt-4 text-sm italic text-gray-600">"{judge.message}"</p>
  <h3 className="mt-2 font-semibold text-lg">{judge.name}</h3>
  <p className="text-xs text-gray-500">{judge.title}</p>
</div>

          ))}
        </div>
      </div>

      {/* Marquee animation styles */}
      <style>
        {`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
          display: flex;
        }

        @media (max-width: 768px) {
          .animate-marquee {
            animation-duration: 45s;
          }
        }
        `}
      </style>
        <div className="mt-20 text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-white mb-6"
          >
            Meet the Visionary Behind Ethik
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md"
          >
            <img
              src="https://ethikonline.com/cdn/shop/files/Ethik_AI_Logo_New.svg"
              alt="Ethik Founder"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <p className="text-lg italic text-gray-600 mb-2">
              "Ethik started with a dream to bring luxury without cruelty. Every stitch tells a story of sustainability, bold design, and conscious living."
            </p>
            <h4 className="font-semibold text-xl text-gray-800">Rohit Reddy</h4>
            <p className="text-sm text-gray-500">Founder & CEO, Ethik</p>
          </motion.div>
        </div>
    </div>
  )
}

export default EthikSharkTank
