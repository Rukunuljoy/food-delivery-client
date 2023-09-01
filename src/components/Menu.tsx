'use client'
import Image from "next/image";
import Link from "next/link";
import React, {  useState} from "react";

const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {!open ? (
        <Image src="/open.png" width={20} height={20} alt="" onClick={()=>setOpen(true)}/>
      ) : (
        <Image src="/close.png" width={20} height={20} alt="" onClick={()=>setOpen(false)}/>
      )}
      <div>
        {links.map((item)=>(
            <Link href={item.url} key={item.id}
                {item.TITLE}
            </Link>
       ) )}
      </div>
    </div>
  );
};

export default Menu;
