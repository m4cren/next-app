import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import Authentication from "./Authentication";

const NavBar = () => {
   return (
      <nav className="flex flex-row justify-between px-8 py-6 bg-[#2c2c2c]">
         <h1>NextJs</h1>
         <ul className="flex flex-row justify-around gap-4 w-[35%]">
            <li>
               <Link href={"/users"}>users</Link>
            </li>
            <li>
               <Link href={"/products"}>products</Link>
            </li>
            <Authentication />
         </ul>
      </nav>
   );
};

export default NavBar;
