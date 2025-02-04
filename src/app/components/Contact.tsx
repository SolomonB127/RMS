import Image from 'next/image';
import React from 'react';

const Contact = () => {
    return (
        <section className='mt-24 px-6 md:px-12 lg:px-20 text-white'>
            <div className='bg-[#013A61] w-full max-w-[1224px] h-auto md:h-[541px] rounded-3xl flex flex-col md:flex-row justify-evenly items-center p-6 md:p-12'>
                <div className='w-full md:w-1/2'>
                    <h3 className='font-semibold text-3xl md:text-4xl'>Get Notified</h3>
                    <p className='mt-4'>Kindly subscribe here and be the first to get <br /> notified on every job post in your field.</p>
                    <div className='mt-6'>
                        <label htmlFor='job' className='block font-medium'>Preferred Job</label>
                        <input type='text' id='job' className='outline-none w-full p-2 mt-1 rounded-lg text-black' aria-label='Preferred Job' />
                        <label htmlFor='email' className='block mt-4 font-medium'>Email Address</label>
                        <input type='email' id='email' className='outline-none w-full p-2 mt-1 rounded-lg text-black' aria-label='Email Address' />
                    </div>
                    <button type='submit' className='bg-[#F88F09] rounded-lg mt-6 py-3 px-10 w-full md:w-auto'>
                        Submit
                    </button>
                </div>
                <div className='relative w-full md:w-1/2 flex justify-center mt-6 md:mt-0'>
                    <div className='relative w-[300px] h-[300px]'>
                        <Image src={'/a.png'} alt='Main Illustration' layout='fill' objectFit='contain' className='relative z-10' />
                        <div className='absolute inset-0 z-10'>
                            <Image src={'/image 11.png'} alt='Background Design' layout='fill' objectFit='cover' className='' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
