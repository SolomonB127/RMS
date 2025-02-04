import Image from 'next/image';
import React from 'react';

const Categories = () => {
    const categories = [
        { title: "Accounting and Finance", icon: "/stocks.png" },
        { title: "Renewable Energy", icon: "/renewable-energy 1.png" },
        { title: "IT", icon: "/project-management 1.png" },
        { title: "Hospitality", icon: "/food-tray.png" },
        { title: "Healthcare", icon: "/doctor.png" },
        { title: "Engineering", icon: "/engineering.png" },
        { title: "Marketing", icon: "/marketing.png" },
        { title: "Education", icon: "/education.png" },
    ];

    return (
        <section className='mt-24 px-6 md:px-12 lg:px-20 categories'>
            <h2 className='text-center font-semibold text-3xl md:text-4xl text-black'>Most Demanded Job Categories</h2>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-6 place-items-center'>
                {categories.map((item, i) => (
                    <button
                        key={i}
                        className='w-full max-w-[250px] h-[180px] flex flex-col items-center justify-center p-4 bg-white hover:bg-[#fcc680] focus:bg-[#F88F09] border border-gray-300 rounded-lg shadow-md transition-all duration-300 focus:outline-none'
                        aria-label={item.title}
                    >
                        <Image src={item.icon} alt={item.title} width={52} height={52} className='mb-3' />
                        <h5 className='text-lg font-medium text-gray-900'>{item.title}</h5>
                    </button>
                ))}
            </div>
        </section>
    );
};

export default Categories;
