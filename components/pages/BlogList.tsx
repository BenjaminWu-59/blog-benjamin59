import { BlogPost } from '@/config/articles';
import React from 'react';
import Image from "next/image";
import ScrollList from '@/components/ScrollList';

interface BlogListProps {
  items: BlogPost[];
}

const BolgList: React.FC<BlogListProps> = ({ items = [] }) => {
  return (
    <ScrollList>
      {items.map((item, index) => (
        <div key={index}
          className="z-10 w-[390px] h-[250px] m-5 px-4 flex-grow bg-background rounded-3xl cursor-pointer border border-border flex flex-col shadow-normal 
                          hover:scale-105 transition-transform duration-900">
          <p className="py-3 text-2xl font-bold">{item.title}</p>
          <hr className="pt-4 border-black-3" />
          <p className="text-gray-500">
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
    </ScrollList>
  );
}

export default BolgList;
