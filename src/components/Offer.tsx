import Image from 'next/image';
import React from 'react';
import CountDown from './CountDown';

const Offer = () => {
    return (
        <div className='bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url("/offerBg.png")] md:h-[70vh]'>
            {/* text container  */}
            <div className='flex-1 text-white flex flex-col  justify-center items-center gap-8 text-center p-6'>
                <h1 className='text-3xl font-bold lg:text-5xl'>Delicious Burger & French Fry</h1>
                <p className='lg:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat provident minima voluptatum saepe consequuntur libero illum reprehenderit quaerat tempora quod?</p>
                <CountDown/>
                <button className='bg-red-500 rounded-md py-3 px-6'>Order Now</button>
            </div>
            {/* image container  */}
            <div className='relative flex-1 w-full md:h-full'>
                <Image src='/offerProduct.png' alt='' fill className='object-contain'/>
            </div>
        </div>
    );
};

export default Offer;