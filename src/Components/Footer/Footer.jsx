import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='text-black bg-gray-300 p-4 md:p-8 lg:p-12 xl:p-20'>
            <div className='flex flex-col xl:flex-row justify-between'>
                <div className='space-y-4'>
                    <img src="./images/logo-footer.png" alt="" />
                    <p className='xl:text-lg text-sm font-normal'>Fickle Flight is your one-stop travel portal. We offer hassle free flight and <br /> hotel bookings. We also have all your flight needs in you online shop.</p>
                    <div className='flex gap-6'>
                        <FaFacebook />
                        <FaTwitter />
                        <FaInstagram />
                    </div>
                </div>
                <div>
                    <ul className='space-y-3'>
                        <li className='text-xl font-bold'>Company</li>
                        <li>About Us</li>
                        <li>News</li>
                        <li>Careers</li>
                        <li>How we work</li>
                    </ul>
                </div>
                <div>
                    <ul className='space-y-3'>
                        <li className='text-xl font-bold'>Support</li>
                        <li>Account</li>
                        <li>Support Center</li>
                        <li>FAQ</li>
                        <li>Accessibility</li>
                    </ul>
                </div>
                <div>
                    <ul className='space-y-3'>
                        <li className='text-xl font-bold'>More</li>
                        <li>Covid Advisory</li>
                        <li>Airline Fees</li>
                        <li>Tips</li>
                        <li>Quarantine Rules</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
