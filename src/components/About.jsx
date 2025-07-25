import React from "react";
import { motion } from "framer-motion";
import EthikSharkTank from "./EthikSharkTank";

const About = () => {
  return (
    <div className="bg-gray-950 text-gray-100 py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            About Ethik
          </motion.h2>
          <p className="text-gray-300 max-w-4xl mx-auto">
            It is no coincidence that Ethik is born in a land where non-violence
            is considered the greatest virtue. We are activists for a
            leather-free world and we will never buy the argument that animal
            skin must be used to amplify a human's fashion quotient or adorn
            their homes and cars. Ethik is a Leather-free Fashion Label for men
            based in India's Silicon Valley, Bengaluru. Launched in 2013, Ethik
            has been the brand of choice for those who believe in making
            sustainable, conscious, cruelty-free stylish choices. Our shoes,
            belts, wallets & accessories are of superior quality, ethically
            crafted & built to last.
          </p>
        </motion.div>

        {/* Brand Story Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          <img
            src="https://cdn.shopify.com/s/files/1/0563/1423/2875/files/Ethik_Social_Sharing_Vegan_Accessories.jpg?v=1751243042"
            alt="Crafted Vegan"
            className="rounded-lg w-full object-cover"
          />
          <div>
           
            <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
             className="text-2xl font-semibold text-white mb-4"
          >
           A Journey Rooted in Compassion
          </motion.h2>
            <p className="text-gray-300 leading-relaxed">
              Ethik began with a mission to redefine fashion — not just by
              appearance, but by impact. Every product we make is 100%
              cruelty-free, using high-quality vegan materials that challenge
              the norms of luxury.
              <br />
              <br />
              We blend traditional craftsmanship with innovative design to
              create collections that don't compromise on ethics or aesthetics.
            </p>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
        
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
             className="text-2xl font-bold text-white mb-4"
          >
          Our Core Values
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6 text-left mt-6">
            <div className="bg-gray-900 p-6 rounded-md hover:bg-[#138695] transition duration-300">
              <h3 className="text-xl font-semibold text-white mb-2">
                Vegan & Cruelty-Free
              </h3>
              <p className="text-gray-300">
                No animal products. No animal testing. Only sustainable,
                plant-based craftsmanship.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-md hover:bg-[#4A3F35] transition duration-300">
              <h3 className="text-xl font-semibold text-white mb-2">
                Handcrafted Elegance
              </h3>
              <p className="text-gray-300">
                Designed and detailed by skilled artisans who take pride in
                every stitch and finish.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-md hover:bg-[#365482] transition duration-300">
              <h3 className="text-xl font-semibold text-white mb-2">
                Sustainable Fashion
              </h3>
              <p className="text-gray-300">
                Our production minimizes waste and maximizes longevity, ensuring
                every item tells a better story.
              </p>
            </div>
          </div>
        </motion.div>
        {/* Ethik on shark tank */}

        <section className="py-10">
          {
            /* Ethik on Shark Tank */
            <EthikSharkTank />
          }
        </section>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
         
           <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
             className="text-2xl font-bold mb-4"
          >
         Join the Ethik Movement
          </motion.h2>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto">
            Style that speaks for itself — and stands for something greater. Be
            bold. Be ethical.
          </p>
          <button className="bg-white text-black font-semibold px-6 py-3 rounded hover:bg-gray-200 transition">
            Explore Collections
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
