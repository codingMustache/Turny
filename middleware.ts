import { auth } from "@/auth"
 
export default auth((req) => {
  const authPath = [
    "/login",
    "/"
  ]
  if (!req.auth && !authPath.includes(req.nextUrl.pathname) ) {
    const newUrl = new URL("/", req.nextUrl.origin)
    return Response.redirect(newUrl)
  }
})
export const config = {
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico).*)",
    ],
}
