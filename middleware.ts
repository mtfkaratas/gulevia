import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

/**
 * Intercepts requests to apply locale detection, rewrite localized pathnames
 * to internal routes, and set locale cookie. Matcher excludes api, _next, _vercel, and static files.
 */
export default createMiddleware(routing);

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
