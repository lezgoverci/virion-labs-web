// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const cookie = request.cookies.get("io.virionlabs.jwt");

  const url = request.nextUrl.pathname;
  const response = NextResponse.next();


  if(url.includes('/login')){
    response.cookies.set('io.virionlabs.jwt',"123456")
  }else{
    //console.log("not login")
  }




  if(!cookie){
    return NextResponse.rewrite(new URL('/login', request.url))
  }else{
    return NextResponse.rewrite(new URL('/profile', request.url))
  }

  // const response = NextResponse.next();
  // console.log("cookie",cookie)
  // response.
  // response.cookies.set("jwt", "123456");

  // return response;
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/","/login","/profile"],
};
