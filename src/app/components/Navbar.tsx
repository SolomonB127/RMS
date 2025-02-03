"use client"
import Image from 'next/image';
import { Menu, Pipette } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    }

    return (
        <header className="sticky top-0 z-50 border-b border-gray-400 shadow-lg backdrop-blur-md">
            <nav aria-label="Main Navigation">
                <div className='mx-auto flex max-w-7xl items-center justify-between p-4'>
                    {/* Logo */}
                    <div className='flex items-center'>
                        <Link href="/" aria-label="Go to Homepage">
                            <Image src="/Subtract.png" alt="RMS Logo" width={32} height={32} />
                        </Link>
                        <h1 className='font-semibold text-[18px] ml-2'>Job Master</h1>
                    </div>

                    {/* Mobile Menu Icon */}
                    <button
                        className="cursor-pointer md:hidden"
                        aria-label="Open Mobile Menu"
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-menu"
                        onClick={toggleMenu}
                    >
                        <Menu />
                    </button>

                    {/* Desktop Navigation */}
                    <ul className="text-l ml-20 hidden items-center space-x-8 font-semibold md:flex">
                        <li>
                            <button className="text-[#F88F09] text-[18px] font-normal text-center" aria-label="Navigate to Register page">
                                Register
                            </button>
                        </li>

                        <img src="/Line 2.png" alt=""/>

                        <li>
                            <button className="text-[#F88F09] text-[18px] font-normal text-center" aria-label="Navigate to Log In page">
                                Log In
                            </button>
                        </li>

                        <img src="/Line 2.png" alt=""/>

                        <li>
                            <button className="bg-[#F88F09] text-white text-[18px] font-normal text-center rounded-[10px] gap-[10px] pt-3 pr-8 pb-3 pl-8" aria-label="Navigate to Post jobs page">
                                Post a Job
                            </button>
                        </li>
                    </ul>
                </div>

                {/* Mobile Menu */}
                <div
                    id="mobile-menu"
                    className={`fixed left-0 top-0 h-screen w-full flex-col justify-center bg-white text-xl transition-transform duration-500 ${isMenuOpen ? "flex animate-open-menu" : "hidden"}`}
                    aria-hidden={!isMenuOpen}
                >
                    <nav aria-label="Mobile Navigation" className="flex flex-col items-center py-16 font-bold">
                        {/* Close Icon */}
                        <button
                            onClick={toggleMenu}
                            className="absolute right-6 top-6 text-4xl"
                            aria-label="Close Mobile Menu"
                        >
                            &times;
                        </button>

                        {/* Links */}
                        <ul className="mt-8 flex flex-col items-center space-y-6">
                            <li>
                                <button className="text-[#F88F09] text-[18px] font-normal text-center" aria-label="Navigate to Register page" onClick={toggleMenu}>
                                    Register
                                </button>
                            </li>

                            <li>
                                <button className="text-[#F88F09] text-[18px] font-normal text-center" aria-label="Navigate to Log In page"  onClick={toggleMenu}>
                                    Log In
                                </button>
                            </li>

                            <li>
                                <button className="bg-[#F88F09] text-white text-[18px] font-normal text-center rounded-[10px] gap-[10px] pt-3 pr-8 pb-3 pl-8" aria-label="Navigate to Post jobs page"  onClick={toggleMenu}>
                                    Post a Job
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
