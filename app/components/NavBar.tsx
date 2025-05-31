import Link from "next/link";
import React from "react";

const NavBar = () => {
   return (
      <nav className="flex flex-row justify-between px-8 py-6 bg-[#2c2c2c]">
         <h1>NextJs</h1>
         <ul className="flex flex-row justify-around gap-2 w-[15%]">
            <li>
               <Link href={"/users"}>users</Link>
            </li>
            <li>
               <Link href={"/products"}>products</Link>
            </li>
         </ul>
      </nav>
   );
};

export default NavBar;
