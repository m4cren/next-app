import { NextRequest, NextResponse } from "next/server";
export { default } from "next-auth/middleware";

export const config = {
   matcher: ["/users/:id*"],
};
