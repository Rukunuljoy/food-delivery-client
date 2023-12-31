import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Image from "next/image";

const Navbar = () => {
  const user = false;
  return (
    <div className="h-12 text-red-500 md:h-24 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase lg:px-20 shadow-md">
      {/* left link  */}
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
      </div>
      {/* logo  */}
      <div className="text-xl md:font-bold font-bold flex-1 md:text-center">
        <Link href="/">Fast Food</Link>
      </div>
      {/* mobile menu  */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* Right link  */}
      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
        <div className="flex md:absolute top-3 right-2 lg:static items-center gap-2 cursor-pointer bg-orange-300 rounded-md py-1 px-1">
            <Image src="/phone.png" alt="" width={20} height={20}/>
            <span>017 523782</span>
        </div>
        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/orders">Order</Link>
        )}
        <CartIcon/>
      </div>
    </div>
  );
};

export default Navbar;
