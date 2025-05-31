import React from "react";
import UserNotFound from "./not-found";
import { notFound } from "next/navigation";

interface UserDetailProps {
   params: {
      id: number;
   };
}

const UserDetails = async ({ params: { id } }: UserDetailProps) => {
   if (id > 10) notFound();
   return <div>UserDetails {id}</div>;
};

export default UserDetails;
