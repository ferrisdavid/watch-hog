// Next.
import { NextResponse } from "next/server"

// Auth.
import { auth } from "./auth"
 
export default auth((req) => {
  if (!req.auth) {
    return NextResponse.redirect(new URL('/', req.url))
  }
})

export const config = {
    matcher: ["/explore", "/feed", "/social", "/profile"],
}