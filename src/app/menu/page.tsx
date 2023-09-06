import { menu } from "@/data";
import Link from "next/link";
import React from "react";

const menuPage = () => {
  return (
    <div className="p-4 lg:px-20 justify-center items-center h-1/2 flex flex-col md:flex-row">
      {menu.map((category) => (
        <Link
          href={`/menu/${category.slug}`}
          key={category.id}
          className="w-full  bg-cover p-8 md:h-1/2"
          style={{ backgroundImage: `url(${category.img})` }}
        >
          <div className={`text-${category.color} w-1/2`}>
            <h1 className="uppercase font-bold text-3xl">{category.title}</h1>
            <p className="text-sm my-8">{category.desc}</p>
            <button className={` 2xl:block bg-stone-800 text-red-500 py-2 px-4 rounded-md`}>Explore</button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default menuPage;
