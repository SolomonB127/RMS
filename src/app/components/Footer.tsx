import { Facebook, Instagram, Twitter } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-gray-100 py-10'>
            <section className='px-6 md:px-12 lg:px-20 text-center'>
                <div className='flex items-center justify-center'>
                    <Image src={'/GODP.png'} alt='GODP Logo' width={88} height={64} />
                </div>
                <p className='text-center font-normal text-lg text-gray-600 mt-5 max-w-md mx-auto'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                </p>
                <nav className='mt-10'>
                    <ul className='font-normal text-base flex flex-wrap justify-center gap-6 md:gap-10'>
                        <li className='hover:text-blue-600 cursor-pointer'>Campaigns</li>
                        <li className='hover:text-blue-600 cursor-pointer'>Email Marketing</li>
                        <li className='hover:text-blue-600 cursor-pointer'>Branding</li>
                        <li className='hover:text-blue-600 cursor-pointer'>Offline</li>
                        <li className='hover:text-blue-600 cursor-pointer'>Contact</li>
                        <li className='hover:text-blue-600 cursor-pointer'>FAQs</li>
                    </ul>
                </nav>
                <div className='flex items-center justify-center gap-6 mt-10'>
                    <Facebook className='cursor-pointer hover:text-blue-600' />
                    <Twitter className='cursor-pointer hover:text-blue-600' />
                    <Instagram className='cursor-pointer hover:text-red-600' />
                </div>
                <p className='text-sm text-gray-500 mt-6'>&copy; {new Date().getFullYear()} GODP. All rights reserved.</p>
            </section>
        </footer>
    );
};

export default Footer;
