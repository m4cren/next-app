import { Schema } from "@/app/rules";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma/client";
import { error } from "console";

export async function GET(request: NextRequest) {
   const users = await prisma.user.findMany();
   return NextResponse.json(users);
}
export async function POST(request: NextRequest) {
   const body = await request.json();
   const validatedFields = Schema.safeParse(body);
   if (!validatedFields.success) {
      return NextResponse.json(validatedFields.error.errors, { status: 400 });
   }
   const existingUser = await prisma.user.findUnique({
      where: {
         email: body.email,
      },
   });

   if (existingUser) {
      return NextResponse.json(
         { error: "Email is already registered" },
         { status: 400 },
      );
   }
   const user = await prisma.user.create({
      data: {
         name: body.name,
         email: body.email,
      },
   });
   return NextResponse.json(user, { status: 201 });
}
