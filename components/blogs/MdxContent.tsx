"use client";
import { Post } from "#site/content";
import Image from "next/image";
import * as runtime from "react/jsx-runtime";
import CallOut from "./CallOut";
import { useEffect, useState } from "react";
import ArticleNav from "./ArticleNav";

const useMDXComponent = ({ code = "" }) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const components = {
  Image,
  CallOut,
};

interface MdxProps {
  post: Post;
}

// 类型定义，用于表示每个标题的结构
interface Heading {
  tagName: string;
  text: string;
  children: Heading[];
}

const MDXContent = ({ post }: MdxProps) => {
  const [headingsStructure, setHeadingsStructure] = useState<Heading[]>([]);

  const Component = useMDXComponent({ code: post.body });

  useEffect(() => {
    const headings = Array.from(
      document.querySelectorAll("h1, h2, h3, h4, h5, h6")
    ) as HTMLHeadingElement[];

    const structure: Heading[] = [];
    const stack: Heading[] = [];

    headings.forEach((heading) => {
      const level = parseInt(heading.tagName[1], 10);
      const newHeading: Heading = {
        tagName: heading.tagName,
        text: heading.textContent || "",
        children: [],
      };

      while (
        stack.length &&
        parseInt(stack[stack.length - 1].tagName[1], 10) >= level
      ) {
        stack.pop();
      }

      if (stack.length === 0) {
        structure.push(newHeading);
      } else {
        stack[stack.length - 1].children.push(newHeading);
      }

      stack.push(newHeading);
    });
    setHeadingsStructure(structure);
    console.log(stack)
  }, []);

  return (
    <section className="flex prose dark:prose-invert p-10">
      {/* side nav */}
      <nav className="relative min-w-80 border-r-2">
        <div className="fixed  max-w-80 left-2.5%] top-[8%]">
          <ArticleNav headings={headingsStructure} />
        </div>
      </nav>


      <div className="flex-1 p-10">
        {/* main content */}
        <h1 id={post.title.replace(/\s+/g, "-").toLowerCase()}>{post.title}</h1>
        {post.description ? (
          <p className="text-xl mt-0 text-muted-foreground">{post.description}</p>
        ) : null}
        <hr className="my-4" />

        <div className="w-[65%] flex-grow p-6">
          <Component components={components} />
        </div>
      </div>

    </section>
  );
};

export default MDXContent;