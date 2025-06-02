import { ProductSchema } from "@/app/rules";
import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
   const products = await prisma.products.findMany();

   if (!products) {
      return NextResponse.json({ message: "No products" }, { status: 400 });
   }
   return NextResponse.json(products);
}

export async function POST(request: NextRequest) {
   const body = await request.json();

   const validatedProducts = ProductSchema.safeParse(body);

   if (!validatedProducts.success) {
      return NextResponse.json(validatedProducts.error.errors, { status: 400 });
   } else {
      await prisma.products.create({
         data: {
            name: validatedProducts.data.name,
            price: Number(validatedProducts.data.price),
         },
      });

      return NextResponse.json(
         { message: "Success creating product" },
         { status: 201 },
      );
   }
}
