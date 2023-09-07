import React from 'react';

const OrderPage = () => {
    return (
        <div className='p-4 lg:px-20'>
            <table className='w-full border-separate border-spacing-3'>
                <thead>
                    <tr className='text-left'>
                        <th className='hidden md:block'>Order id</th>
                        <th>Date</th>
                        <th>Price</th>
                        <th className='hidden md:block'>Products</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='text-sm md:text-md lg:text-lg bg-red-50'>
                        <td className='hidden md:block py-6 px-2'>4792308023</td>
                        <td className='py-6 px-2'>19-10-2023</td>
                        <td className='py-6 px-2'>56.67</td>
                        <td className='hidden py-6 px-2 md:block'>Sicilian</td>
                        <td className='py-6 px-2'>on the ways</td>
                    </tr>
                    <tr className='text-sm md:text-md lg:text-lg odd:bg-gray-100'>
                        <td className='hidden md:block py-6 px-2'>4792308023</td>
                        <td className='py-6 px-2'>19-10-2023</td>
                        <td className='py-6 px-2'>56.67</td>
                        <td className='hidden py-6 px-2 md:block'>Sicilian</td>
                        <td className='py-6 px-2'>on the ways</td>
                    </tr>
                    <tr className='text-sm md:text-md lg:text-lg odd:bg-gray-100'>
                        <td className='hidden md:block py-6 px-2'>4792308023</td>
                        <td className='py-6 px-2'>19-10-2023</td>
                        <td className='py-6 px-2'>56.67</td>
                        <td className='hidden py-6 px-2 md:block'>Sicilian</td>
                        <td className='py-6 px-2'>on the ways</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default OrderPage;