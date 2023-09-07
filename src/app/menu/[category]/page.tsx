import { Pizzas } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const categoryPage = () => {
  return (
    <div className="flex overflow-x-scroll flex-wrap text-red-500">
      {Pizzas.map((category) => (
        <Link
          className="w-full h-[60vh] border-r-2 border-b-2 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between  border-red-500 group odd:bg-fuchsia-50"
          href={`/product/${category.id}`}
          key={category.id}
        >
          {/* image container  */}
          {category.img && (
            <div className="relative h-[80%] hover:rotate-[60deg] transition-all duration-500">
              <Image
                src={category.img}
                alt=""
                className="object-contain "
                fill
              />
            </div>
          )}
          {/* text container  */}
          <div className="flex items-center justify-between font-bold ">
            <h1 className="text-2xl uppercase p-2">{category.title}</h1>
            <h1 className="group-hover:hidden text-xl">${category.price}</h1>
            <button className="hidden group-hover:block uppercase  bg-red-500 text-white p-2 rounded-md">
              Add to cart
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default categoryPage;
