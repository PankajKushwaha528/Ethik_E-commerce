import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'

const Footer = () => {
    return (
        <footer className='bg-black text-gray-300'>
            <div className='max-w-7xl mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-8'>
                {/* Company Info */}
                <div>
                    <h2 className='text-xl font-bold text-white mb-4'>Ethik</h2>
                    <p>Premium Vegan Footwear, Wallets & Belts handcrafted for conscious living. 100% cruelty-free. Proudly Made in India.</p>
                </div>

                {/* Shop Links */}
                <div>
                    <h2 className='text-xl font-bold text-white mb-4'>Shop</h2>
                    <ul className='space-y-2'>
                        <li className='hover:text-white cursor-pointer'>Footwear</li>
                        <li className='hover:text-white cursor-pointer'>Wallets</li>
                        <li className='hover:text-white cursor-pointer'>Belts</li>
                        <li className='hover:text-white cursor-pointer'>Combos</li>
                    </ul>
                </div>

                {/* Customer Care */}
                <div>
                    <h2 className='text-xl font-bold text-white mb-4'>Customer Care</h2>
                    <ul className='space-y-2'>
                        <li className='hover:text-white cursor-pointer'>Track Your Order</li>
                        <li className='hover:text-white cursor-pointer'>Shipping & Returns</li>
                        <li className='hover:text-white cursor-pointer'>FAQs</li>
                        <li className='hover:text-white cursor-pointer'>Contact Us</li>
                    </ul>
                </div>

                {/* Follow Us */}
                <div>
                    <h2 className='text-xl font-bold text-white mb-4'>Follow Us</h2>
                    <div className='flex gap-5'>
                        <a href='https://www.facebook.com/ethikwear' target='_blank' rel='noreferrer' className='hover:text-white'><FaFacebook /></a>
                        <a href='https://twitter.com/EthikWear' target='_blank' rel='noreferrer' className='hover:text-white'><FaSquareXTwitter /></a>
                        <a href='https://www.instagram.com/ethikwear/' target='_blank' rel='noreferrer' className='hover:text-white'><FaInstagram /></a>
                        <a href='https://www.youtube.com/@ethikwear' target='_blank' rel='noreferrer' className='hover:text-white'><FaYoutube /></a>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className='bg-gray-800 text-center py-4 text-sm'>
                <p>&copy; {new Date().getFullYear()} Ethik. All rights reserved. Owned by Knoskin Fashion Pvt. Ltd.</p>
            </div>
        </footer>
    )
}

export default Footer


