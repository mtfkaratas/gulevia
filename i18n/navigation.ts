import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

/**
 * Locale-aware navigation APIs. Use these instead of next/link and next/navigation
 * so URLs follow the pathnames config (e.g. /tr/hakkimizda instead of /tr/about).
 * Exports: Link, redirect, usePathname, useRouter, getPathname.
 */
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
