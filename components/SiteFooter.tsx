import { siteConfig } from "@/config/site";
import { Mail } from "lucide-react";
import Icons from "@/components/SiteIcons";

const SiteFooter = () => {
  return (
    <footer className="w-full h-20 my-32 pt-2 text-center font-zain text-lg text-gray-400/100 border-gray-300/20 border">
      <div className="text-xl font-zain font-bold">
        Benjamin59 本无酒
      </div>
      <div className="mb-2 mt-2 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <a target="_blank" rel="noreferrer" href="">
            <span className="sr-only">Mail</span>
            <Mail className="h-5 w-5" />
          </a>
          <a target="_blank" rel="noreferrer" href={siteConfig.links.x}>
            <span className="sr-only">Twitter</span>
            <Icons.twitter className="h-5 w-5" />
          </a>
          <a target="_blank" rel="noreferrer" href={siteConfig.links.github}>
            <span className="sr-only">GitHub</span>
            <Icons.gitHub className="h-5 w-5" />
          </a>
        </div>
      </div>

      <div className="py-10">
        <a href={siteConfig.links.icp}>
          <span className="font-semibold text-blue-400">闽ICP备2024058520号-1</span>
        </a>
      </div>
    </footer>
  );
}

export default SiteFooter