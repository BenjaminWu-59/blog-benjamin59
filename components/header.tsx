import { siteConfig } from "@/config/site";
import { Icons } from "./Icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { MainNav } from "./MainNav";

export function SiteHeader() {
  return (
    <header className="px-4 lg:px-16 xl:px-32 2xl:px-44 fixed w-full backdrop-blur-[2px] bg-gradient-to-gray-50 bg-gradient-to-b from-gray-100 to-gray-100/0 z-20 py-4 border-b-gray-300/10 border-b">
      <div className="container flex h-14 max-w-screen-3xl items-center">
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "w-10 px-0 sm:inline-flex"
                )}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.x}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "w-10 px-0 sm:inline-flex"
                )}
              >
                <Icons.twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}