"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const data = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur, ",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet consectetur. ",
    image: "/slide3.jpg",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
        ()=>setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1))
        , 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50">
      {/* text container */}
      <div className="flex-1 lg:h-full flex items-center justify-center flex-col gap-8 text-red-500 font-bold">
        <h1 className=" text-3xl text-center uppercase md:p-10 p-4 md:text-5xl">
          {data[currentSlide].title}
        </h1>
        <button className="bg-red-500 text-white py-4 px-8 rounded-lg shadow-sm ">
          order now
        </button>
      </div>
      {/* image container  */}
      <div className=" flex-1 w-full relative">
        <Image
          src={data[currentSlide].image}
          alt=""
          className="object-cover"
          fill
        />
      </div>
    </div>
  );
};

export default Slider;
