// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import axios from "axios";

export function middleware(request: NextRequest) {
  // return NextResponse.redirect(new URL("/about-2", request.url));
  //const res = NextResponse.next();

  let token = request.cookies.get("token")?.value;

  if (!token) return console.log("Token bulunmuyor.");

  fetch("http://localhost:3001/api/auth/user/" + token)
    .then(async (data) => {
      const a = await data.json();
      console.log(a);
    })
    .catch((err) => {
      console.log(true);
      console.log(err);
    });
}

export const config = {
  matcher: ["/login/:path*", "/register/:path*"],
};
