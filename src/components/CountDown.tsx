"use client"
import React from 'react';
import Countdown from 'react-countdown';

const endingDate = new Date("2023-9-23")

const CountDown = () => {
    return (
        <>
        <Countdown className='font-bold text-3xl lg:text-5xl text-yellow-500' date={endingDate}/>
        </>
    );
};

export default CountDown;