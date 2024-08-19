import { posts } from "#site/content"
import { sortPosts } from "@/lib/utils"
import React from 'react';
import ScrollList from '@/components/ScrollList';
import { cn, formatDate } from "@/lib/utils";
import { Calendar } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";


const BolgList = () => {

  const displayPosts = sortPosts(posts.filter((post) => post.published)).slice(0, 5);

  return (
    <ScrollList>
      {displayPosts.map((item, index) => (
        <div key={index}
          className="z-10 w-[390px] h-[250px] m-5 px-4 flex-grow bg-background rounded-3xl cursor-pointer border border-border flex flex-col shadow-normal 
                          hover:scale-105 transition-transform duration-900">
          <div className="flex-1">
            <p className="py-3 text-2xl font-bold">{item.title}</p>
            <hr className="pt-4 border-black-3" />
            <p className="text-gray-500">
              {item.description}
            </p>
          </div>
          <div className="flex justify-between items-center py-2">
            <dl>
              <dt className="sr-only">Published On</dt>
              <dd className="text-sm sm:text-base font-medium flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <time dateTime={item.date}>{formatDate(item.date)}</time>
              </dd>
            </dl>
            <Link
              href={item.slug}
              className={cn(buttonVariants({ variant: "link" }), "py-0")}
            >
              Read more →
            </Link>
          </div>
        </div>
      ))}
    </ScrollList>
  );
}

export default BolgList;
