import { FeaturedProducts } from '@/data';
import Image from 'next/image';
import React from 'react';

const Featured = () => {
    return (
        <div className='w-screen overflow-x-scroll text-red-500'>
            {/* wrapper */}
            <div className='w-max flex '>
                {/* single item  */}
            {
                FeaturedProducts.map(item=>(

                <div key={item.id} className='w-screen p-4 h-[60vh] flex flex-col items-center justify-around hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] lg:w-[33vw] lg:h-[90vh]'>
                {/* image container */}
                {item.img && <div className='relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500'>
                    <Image src={item.img} alt='' fill className='object-contain'/>
                </div>}
                {/* text container  */}
                <div className='flex-1 flex flex-col gap-4 justify-center text-center items-center'>
                    <h1 className='text-xl font-bold uppercase lg:text-2xl'>{item.title}</h1>
                    <p className='p-4'>{item.desc}</p>
                    <span className='text-xl font-bold'>{item.price}</span>
                    <button className='bg-red-500 text-white p-2 rounded-md shadow-md'>Add to card</button>
                </div>
                </div>
                )) }
            </div>
        </div>
    );
};

export default Featured;