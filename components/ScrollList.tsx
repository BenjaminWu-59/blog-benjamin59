import { BlogPost } from '@/config/articles';
import React from 'react';

interface ScrollListProps {
  items: BlogPost[];
}

const ScrollList: React.FC<ScrollListProps> = ({ items = [] }) => {
  return (
    <div className="as-scroll-container overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
      <section className="flex as-scroll-animate" style={{ minWidth: "100%" }}>
        {items.map((item, index) => (
          <div key={index} className="z-10 w-96 m-5 px-3 flex-grow rounded-3xl cursor-pointer border border-border" style={{
            backgroundColor: item.backgroundColor,
            background: item.background
          }}>
            <p className="py-3 text-2xl font-bold">{item.title}</p>
            <p className="text-muted-foreground">
              {item.description}
            </p>
            <div className="flex justify-between items-center">
              <div>
                日历
                <p>{item.createdAt}</p>Ï
              </div>
              <div>
                {`read more ->`}
              </div>
            </div>
          </div>
        ))}
      </section>
      <section className="flex as-scroll-animate" style={{ minWidth: "100%" }} aria-hidden="true">
        {items.map((item, index) => (
          <div key={index} className="z-10 w-96 m-5 px-3 flex-grow rounded-3xl cursor-pointer border border-border" style={{
            backgroundColor: item.backgroundColor,
            background: item.background
          }}>
            <p className="py-3 text-2xl font-bold">{item.title}</p>
            <p className="text-muted-foreground">
              {item.description}
            </p>
            <div className="flex justify-between items-center">
              <div>
                日历
                <p>{item.createdAt}</p>Ï
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
