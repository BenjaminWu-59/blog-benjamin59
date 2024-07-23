"use client";

import { siteConfig } from "@/config/site";
import { Icons } from "./icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function MainNav() {
  const pathname = usePathname();
  return (
    <nav className="flex items-center space-x-4 lg:space-x-6 justify-center">
      <Link href="/" className="mr-2 flex items-center justify-center space-x-3">
        <Icons.logo className="h-6 w-6" />
        <span className="text-3xl font-zain font-bold text-foreground/80">{siteConfig.name}</span>
      </Link>
      <Link
        href="/"
        className={cn(
          "text-lg font-medium transition-colors hover:text-primary hidden sm:inline-block",
          pathname === "/blog" ? "text-foreground" : "text-foreground/60"
        )}
      >
        Project
      </Link>
      <Link
        href="/"
        className={cn(
          "text-lg font-medium transition-colors hover:text-primary hidden sm:inline-block",
          pathname === "/about" ? "text-foreground" : "text-foreground/60"
        )}
      >
        Blogs
      </Link>
      <Link
        href="/"
        className={cn(
          "text-lg font-medium transition-colors hover:text-primary hidden sm:inline-block",
          pathname === "/about" ? "text-foreground" : "text-foreground/60"
        )}
      >
        Code
      </Link>
      <Link
        href="/"
        className={cn(
          "text-lg font-medium transition-colors hover:text-primary hidden sm:inline-block",
          pathname === "/about" ? "text-foreground" : "text-foreground/60"
        )}
      >
        Music
      </Link>
      <Link
        href="/"
        className={cn(
          "text-lg font-medium transition-colors hover:text-primary hidden sm:inline-block",
          pathname === "/about" ? "text-foreground" : "text-foreground/60"
        )}
      >
        Fitness
      </Link>
      <Link
        href="/"
        className={cn(
          "text-lg font-medium transition-colors hover:text-primary hidden sm:inline-block",
          pathname === "/about" ? "text-foreground" : "text-foreground/60"
        )}
      >
        LOL
      </Link>
    </nav>
  );
}