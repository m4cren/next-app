"use client";
import { stat } from "fs";
import { useSession } from "next-auth/react";
import Link from "next/link";

const Authentication = () => {
   const { data: session, status } = useSession();
   console.log(session, status);

   if (status === "loading")
      return <div className="loading loading-dots"></div>;
   return (
      <li>
         {status === "unauthenticated" ? (
            <Link href="/api/auth/signin">Signin with Google</Link>
         ) : (
            <Link href="/api/auth/signout">Logout</Link>
         )}
      </li>
   );
};

export default Authentication;
