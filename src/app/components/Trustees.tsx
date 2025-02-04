import Image from 'next/image'
import React from 'react'

interface Trustee {
    src: string;
    width: number;
    height: number;
}

const Trustees: React.FC = () => {
    const trustees: Trustee[] = [
        { src: "/image 5.png", width: 93, height: 92 },
        { src: "/image 6.png", width: 96, height: 92 },
        { src: "/image 7.png", width: 232, height: 46 },
        { src: "/image 8.png", width: 187, height: 85 },
        { src: "/image 6.png", width: 96, height: 92 },
        { src: "/image 7.png", width: 232, height: 46 },
    ];

    return (
        <section className="bg-white w-full trustees" aria-labelledby="trustees-title">
            <div className="container mx-auto px-6 py-8">
                <h2 id="trustees-title" className="mt-2">
                    Trusted by over 1000+ companies
                </h2>
                <div className="md:flex flex-wrap items-center justify-evenly mt-2 grid grid-cols-2">
                    {trustees.map((item, i) => (
                        <div key={i}>
                            <Image 
                                src={item.src} 
                                alt={`Company logo ${i + 1}`} 
                                width={item.width} 
                                height={item.height} 
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Trustees;
