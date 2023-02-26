import {withAuth} from "next-auth/middleware";

export default withAuth(
  function middleware() {
    // return NextResponse.rewrite(new URL('/admin',req.url))
  },
  {
    callbacks: {
      authorized({token}) {
        return !!token;
      },
    },
  }
);

export const config = {
  matcher: ["/profile/:path*", "/address", "/address/create/:path*"],
};
