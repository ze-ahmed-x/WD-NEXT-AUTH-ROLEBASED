
// basic protecton
// export { default } from "next-auth/middleware"; // authrization will be implimentd on the whole application
// export const config = {
//   matcher: ["/profile", "/admin/:path*", "/client/:path*", "/server"],
// };

// Role based

import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized: async ({ req, token }) => {
      if (req.nextUrl.pathname.startsWith("/admin")) return token?.user.role === "ADMIN";
      return !!token;
    },
  },
});
export const config = { matcher: ["/admin:path*", "/client", "/server"] };