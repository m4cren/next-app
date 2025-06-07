import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth/next";

import { authOption } from "./api/auth/[...nextauth]/route";

export default async function Home() {
   const session = await getServerSession(authOption);

   return (
      <main>
         <h1>Hello {session && <span>{session.user?.name}</span>}</h1>
         <Link href={"/users"}>users</Link>
      </main>
   );
}
