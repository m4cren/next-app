import Link from "next/link";
import React from "react";
import { sort } from "fast-sort";
type UserTypes = {
   id: number;
   name: string;
   email: string;
};

interface UserTableProps {
   orderBy?: string;
}
const UserTable = async ({ orderBy }: UserTableProps) => {
   const res = await fetch("https://jsonplaceholder.typicode.com/users", {
      cache: "no-store",
   });
   const data: UserTypes[] = await res.json();

   const sorted = sort(data).asc((u) =>
      orderBy === "name" ? u.name : u.email,
   );

   return (
      <table className="table table-bordered">
         <thead>
            <tr>
               <th>
                  <Link href={"/users?sortOrder=name"}>Name</Link>
               </th>
               <th>
                  <Link href={"/users?sortOrder=email"}>Email</Link>
               </th>
            </tr>
         </thead>
         <tbody>
            {sorted.map(({ name, email }, index) => (
               <tr key={index}>
                  <td>{name}</td>
                  <td>{email}</td>
               </tr>
            ))}
         </tbody>
      </table>
   );
};

export default UserTable;
