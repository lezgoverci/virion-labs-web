// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const cookie = request.cookies.has('jwt');
    console.log("cookie",cookie)

    if(cookie){
      return NextResponse.redirect(new URL('/profile', request.url))
    }else{
      return NextResponse.redirect(new URL('/', request.url))
    }

}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/profile/:path*'],
}
