import { BlogPost } from '@/config/articles';
import React from 'react';
import Image from "next/image";

interface ScrollListProps {
  items: BlogPost[];
}

const ScrollList: React.FC<ScrollListProps> = ({ items = [] }) => {
  return (
    <div className="py-5  as-scroll-container overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
      <section className="flex as-scroll-animate" >
        {items.map((item, index) => (
          <div key={index} className="z-10 w-[400px] h-[250px] m-5 px-4 flex-grow rounded-3xl cursor-pointer border border-border flex flex-col" style={{
            backgroundColor: item.backgroundColor,
            background: item.background
          }}>
            <p className="py-3 text-2xl font-bold">{item.title}</p>
            <hr className="pt-4 border-black-3" />
            <p className="text-muted-foreground">
              {item.description}
            </p>
            <div className="py-2 flex justify-between items-center mt-auto">
              <div className="flex items-center">
                <Image
                  src="/calender.svg"
                  alt="Calender"
                  className="dark:invert pr-1"
                  width={15}
                  height={15}
                  priority
                />
                <p>{item.createdAt}</p>
              </div>
              <div>
                {`read more ->`}
              </div>
            </div>
          </div>
        ))}
      </section>
      <section className="flex as-scroll-animate" aria-hidden="true">
        {items.map((item, index) => (
          <div key={index} className="z-10 w-[400px] h-[250px] m-5 px-4 flex-grow rounded-3xl cursor-pointer border border-border flex flex-col" style={{
            backgroundColor: item.backgroundColor,
            background: item.background
          }}>
            <p className="py-3 text-2xl font-bold">{item.title}</p>
            <hr className="pt-4 border-black-3" />
            <p className="text-muted-foreground">
              {item.description}
            </p>
            <div className="py-2 flex justify-between items-center mt-auto">
              <div className="flex items-center">
                <Image
                  src="/calender.svg"
                  alt="Calender"
                  className="dark:invert pr-1"
                  width={15}
                  height={15}
                  priority
                />
                <p>{item.createdAt}</p>
              </div>
              <div>
                {`read more ->`}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default ScrollList;
