"use client";

import Image from "next/image";
import * as runtime from "react/jsx-runtime";
import CallOut from "./CallOut";
import { useEffect, useState } from "react";

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const components = {
  Image,
  CallOut,
};

interface MdxProps {
  code: string;
}

// 类型定义，用于表示每个标题的结构
interface Heading {
  tagName: string;
  text: string;
  children: Heading[];
}

const MDXContent = ({ code }: MdxProps) => {
  const [headingsStructure, setHeadingsStructure] = useState<Heading[]>([]);

  const Component = useMDXComponent(code);

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

      // 找到当前标题应放置的位置
      while (
        stack.length &&
        parseInt(stack[stack.length - 1].tagName[1], 10) >= level
      ) {
        stack.pop();
      }

      if (stack.length === 0) {
        // 没有父标题，将其作为顶级标题
        structure.push(newHeading);
      } else {
        // 有父标题，将其放在父标题的 children 中
        stack[stack.length - 1].children.push(newHeading);
      }

      // 将当前标题推入栈中
      stack.push(newHeading);
    });

    setHeadingsStructure(structure);
    console.log(structure); // 打印标题结构
  }, []);

  const renderHeadings = (headings: Heading[]) => (
    <div>
      {headings.map((heading, index) => (
        <p key={index}>
          <a href={`#${heading.text.replace(/\s+/g, "-").toLowerCase()}`}>
            {heading.text}
          </a>
          {heading.children.length > 0 && renderHeadings(heading.children)}
        </p>
      ))}
    </div>
  );

  return (
    <div className="flex">
      {/* 侧边栏 */}
      <nav className="w-[30%]">
        {renderHeadings(headingsStructure)}
      </nav>

      {/* 主要内容区域 */}
      <div className="flex-grow p-6">
        <Component components={components} />
      </div>
    </div>
  );
};

export default MDXContent;