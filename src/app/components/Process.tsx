import Image from 'next/image';
import React from 'react';

const Process = () => {
    const steps = [
        { title: 'Search Jobs', description: 'Lorem viverra elementum faucibus nisl amet amet convallis. Cursus eros posuere quam tincidunt. Ornare varius ac blandit facilisis ut risus at. Nulla erat odio nec ut et nullam.', src: '/check.png' },
        { title: 'Create a Profile', description: 'Lorem viverra elementum faucibus nisl amet amet convallis. Cursus eros posuere quam tincidunt. Ornare varius ac blandit facilisis ut risus at. Nulla erat odio nec ut et nullam.', src: '/check.png' },
        { title: 'Get Noticed', description: 'Lorem viverra elementum faucibus nisl amet amet convallis. Cursus eros posuere quam tincidunt. Ornare varius ac blandit facilisis ut risus at. Nulla erat odio nec ut et nullam.', src: '/check.png' },
        { title: 'Apply for Jobs', description: 'Lorem viverra elementum faucibus nisl amet amet convallis. Cursus eros posuere quam tincidunt. Ornare varius ac blandit facilisis ut risus at. Nulla erat odio nec ut et nullam.', src: '/check.png' },
    ];

    return (
        <section className='mt-24 px-6 md:px-12 lg:px-20 pr-con'>
            <div className='text-center'>
                <h2 className='text-3xl font-bold'>How To Get The Job</h2>
                <p className='text-[#4f4f4f] text-lg max-w-2xl mx-auto'>
                Whether you are looking for a new job or looking to change career, GODP helps you find the right job easily.
                </p>
            </div>

            <section className='mt-10 flex flex-col lg:flex-row items-center md:items-start justify-center max-w-7xl mx-auto gap-10'>
                {/* Image Section */}
                <div className='relative w-80 h-80 flex-shrink-0'>
                    <Image
                        src='/Ellipse 1922.png'
                        alt='Background Ellipse'
                        width={301}
                        height={301}
                        className='w-full h-full object-cover rounded-full'
                        aria-hidden='true'
                    />
                    <div className='absolute inset-0 flex justify-center items-center overflow-hidden rounded-full z-10'>
                        <Image
                        src='/image 4.png'
                        alt='Job Process Illustration'
                        width={425}
                        height={395}
                        className='w-full h-full object-cover'
                        />
                    </div>
                </div>

                {/* Steps Section */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {steps.map((step, index) => (
                        <div key={index} className='w-[320px] md:w-[363px] h-auto border border-gray-300 rounded-md p-5 shadow-sm'>
                            <div className='flex items-center mb-3'>
                                <div className='relative p-5'>
                                    <Image src='/Ellipse 1923.png' alt='Step Icon' width={18} height={18} aria-hidden='true' />
                                    <div className='absolute top-6 left-8'>
                                        <Image src={step.src} alt='Check Mark' width={12} height={12} />
                                    </div>
                                </div>
                                <h5 className='text-lg font-bold text-[#333]'>  
                                    {step.title}
                                </h5>
                            </div>
                            <p className='text-[#4f4f4f] text-lg leading-relaxed'>{step.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </section>
    );
};

export default Process;