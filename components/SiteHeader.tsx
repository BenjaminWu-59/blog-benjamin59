import { siteConfig } from "@/config/site";
import Icons from "@/components/SiteIcons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import MainNav from "./TopNav";
import ModeToggle from "./ModeToggle";

const SiteHeader = () => {
  return (
    <header className="z-10 sticky top-0 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-3xl items-center">
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center">
            <ModeToggle />
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

export default SiteHeader