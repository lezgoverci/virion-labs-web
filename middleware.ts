// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const cookie = request.cookies.get("jwt");

  const response = NextResponse.next();
  console.log("cookie",cookie)
  response.cookies.set("jwt", "123456");

  return response;
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/profile/:path*"],
};
