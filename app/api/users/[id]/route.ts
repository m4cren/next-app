import { prisma } from "@/prisma/client";
import { error } from "console";
import { NextRequest, NextResponse } from "next/server";

interface Props {
   params: {
      id: number;
   };
}

export async function GET(request: NextRequest, { params }: Props) {
   const user = await prisma.user.findUnique({
      where: {
         id: Number(params.id),
      },
   });

   if (user) {
      return NextResponse.json(user);
   } else {
      return NextResponse.json("None");
   }
}

export async function PUT(request: NextRequest, { params: { id } }: Props) {
   const body = await request.json();

   const userToUpdate = await prisma.user.findUnique({
      where: {
         id: Number(id),
      },
   });

   if (!body.name) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
   } else if (!userToUpdate) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
   } else {
      const updateduser = await prisma.user.update({
         where: {
            id: Number(id),
         },
         data: {
            name: body.name,
            email: body.email,
         },
      });
      return NextResponse.json(
         { message: "Success updating the user" },
         { status: 201 },
      );
   }
}

export async function DELETE(request: NextRequest, { params: { id } }: Props) {
   const userToDelete = await prisma.user.findUnique({
      where: {
         id: Number(id),
      },
   });
   if (!userToDelete) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
   }
   await prisma.user.delete({
      where: {
         id: userToDelete.id,
      },
   });
   return NextResponse.json({ message: "success" });
}
