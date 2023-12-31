import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CartPage = () => {
    return (
        <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] text-red-500 lg:flex-row'>
            {/* product container  */}
            <div className='h-1/2 p-4 flex flex-col justify-center overflow-y-scroll lg:h-full lg:w-2/3 lg:px-20'>
                {/* single item  */}
                <div className='flex items-center justify-between mb-4 '>
                    <Image src="/temporary/p1.png" alt='' width={100} height={100}/>
                    <div>
                        <h1 className='uppercase text-xl font-bold'>Sicilian</h1>
                        <span>Large</span>
                    </div>
                    <h2 className='font-bold'>$79.90</h2>
                    <span className='cursor-pointer'>X</span>
                </div>
                <div className='flex items-center justify-between mb-4 '>
                    <Image src="/temporary/p1.png" alt='' width={100} height={100}/>
                    <div>
                        <h1 className='uppercase text-xl font-bold'>Sicilian</h1>
                        <span>Large</span>
                    </div>
                    <h2 className='font-bold'>$79.90</h2>
                    <span className='cursor-pointer'>X</span>
                </div>
                <div className='flex items-center justify-between mb-4'>
                    <Image src="/temporary/p1.png" alt='' width={100} height={100}/>
                    <div>
                        <h1 className='uppercase text-xl font-bold'>Sicilian</h1>
                        <span>Large</span>
                    </div>
                    <h2 className='font-bold'>$79.90</h2>
                    <span className='cursor-pointer'>X</span>
                </div>
            </div>
            {/* payment container  */}
            <div className='p-6 h-1/2 bg-fuchsia-50 flex flex-col gap-4 justify-center uppercase lg:h-full lg:w-2/3 lg:px-20 lg:text-xl md:text-lg text-sm'>
                <div className='flex justify-between '>
                    <span>
                        subtotal (3 item)
                    </span>
                    <span>$81.70</span>
                </div>
                <div className='flex justify-between '>
                    <span>
                       service cost
                    </span>
                    <span>$0.00</span>
                </div>
                <div className='flex justify-between '>
                    <span>
                        delivery cost
                    </span>
                    <span className='text-green-500'>free</span>
                </div>
                <hr className='my-2'/>
                <div className='flex justify-between '>
                    <span>
                        total(incl.vat)
                    </span>
                    <span className=''>$43.00</span>
                </div>
                <Link href='/'>
                <button className='bg-red-500 text-white p-3 rounded-md w-1/2 self-end'>Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default CartPage;