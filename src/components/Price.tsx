"use client";
import Link from "next/link";
import React, { useState,useEffect } from "react";

type Props = {
  price: number;
  id: number;
  options?: { title: string; additionalPrice: number }[];
};

const Price = ({ price, id, options }: Props) => {
  const [total, setTotal] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  useEffect(()=>{
    setTotal(quantity*(options ? price + options[selected].additionalPrice:price))
  },[quantity,selected,options,price])
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">${total.toFixed(2)}</h2>
      {/* option container  */}
      <div className="flex gap-4">
        {options?.map((option, index) => (
          <button
            className="min-w-[6rem] p-2 ring-2 ring-red-400 rounded-md"
            style={{
              background: selected === index ? "rgb(248 113 113)" : "white",
              color: selected === index ? "white" : "red",
            }}
            key={option.title}
            onClick={() => setSelected(index)}
          >
            {option.title}
          </button>
        ))}
      </div>
      {/* quantity container  */}
      <div className="flex justify-between items-center">
        {/* quantity  */}
        <div className="flex justify-between w-full p-3 ring-1 ring-red-500">
          <span>Quantity</span>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              {"<"}
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
            >
              {">"}
            </button>
          </div>
        </div>
        {/* cart button  */}
        <Link href="/cart">
        
        <button className="uppercase bg-red-500 w-56 text-white p-3 ring-1 ring-red-500">
          add to cart
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Price;
