import { Search } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const Hero = () => {
    return (
        <section className="hero-section" aria-labelledby="hero-title">
            <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Left Side Content */}
                <div className="text-center md:text-left">
                    <h1 id="hero-title" className="font-semibold text-4xl sm:text-5xl leading-tight text-black">
                        The Easiest Way To Find <br className="hidden sm:block" /> Your Right Job
                    </h1>
                    <p className="font-normal text-lg text-gray-600 mt-4">
                        Imperdiet pulvinar augue mauris morbi sed nibh gravida. Proin <br className="hidden md:block" />
                        aliquam risus viverra elit. Metus rhoncus cras egestas in nullam <br className="hidden md:block" />
                        et posuere eget quis. Laoreet blandit viverra senectus viverra.
                    </p>

                    {/* Search Bar (Restored Original Layout) */}
                    <div className="relative mt-6 flex flex-wrap items-center">
                        <label htmlFor="job-search" className="sr-only">
                            Search for jobs
                        </label>
                        <input
                            id="job-search"
                            type="text"
                            className="outline-none border border-black bg-white rounded-full pt-3 pr-36 pb-3 pl-6 w-[303px] h-12 text-gray-900"
                            placeholder="Search Jobs"
                        />
                        <Search
                            className="absolute top-3 left-3 w-6 h-6 text-gray-500"
                            aria-hidden="true"
                        />
                        <button
                            className="bg-[#F88F09] text-white text-[18px] font-normal rounded-[10px] py-3 px-8 ml-5 sm:mt-0 mt-2"
                            aria-label="Find a Job"
                        >
                            Find a Job
                        </button>
                    </div>
                </div>

                {/* Right Side Image */}
                <div className="w-full max-w-sm md:max-w-md lg:max-w-lg">
                    <Image
                        src="/Group 53102.png"
                        alt="A woman using a laptop"
                        width={444}
                        height={495}
                        className="w-full h-auto"
                        priority
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
