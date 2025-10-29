// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("auth_token")?.value || null;
 
  const url = req.nextUrl;

  // 🚫 Not logged in → redirect to login
  if (!token && (url.pathname.startsWith("/n"))) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/n/:path*"],
};
