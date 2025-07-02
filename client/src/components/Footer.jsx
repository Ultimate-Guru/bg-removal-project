import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='flex items-center justify-between gap-4 px-4 lg:px-44 py-3'>
            <NavLink to='/'>
                <img src={assets.logo} alt="Logo" width={150} loading='lazy' />
            </NavLink>
            <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>
                All rights reserved. Copyright <a href="https://oluwatosindaniel.vercel.app" target='_blank'> @Oluwatosin </a>
            </p>

            <div className='flex gap-1'>
                <img width={40} src={assets.facebook_icon} alt="Facebook" />
                <img width={40} src={assets.twitter_icon} alt="Twitter" />
                <img width={40} src={assets.google_plus_icon} alt="Google Plus" />
            </div>
        </div>
    )
}

export default Footer