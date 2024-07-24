import { BlogPost } from '@/config/articles';
import React from 'react';

interface ScrollListProps {
  items: BlogPost[];
}

const ScrollList: React.FC<ScrollListProps> = ({ items = [] }) => {
  return (
    <div className="as-scroll-container overflow-hidden">
      <section className="flex as-scroll-animate" style={{ minWidth: "100%" }}>
        {items.map((item, index) => (
          <div key={index} className="w-80 m-5 flex-grow rounded-3xl cursor-pointer" style={{
            backgroundColor: 'rgb(242,238,243)',
            background: 'linear-gradient(120deg, rgba(242,238,243,1) 0%, rgba(241,236,243,1) 43%, rgba(235,221,240,1) 71%, rgba(228,209,235,1) 100%)'
          }}>
            <p className="py-3 font-black text-2xl">{item.title}</p>
            <p>{item.description}</p>
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
          <div key={index} className="w-80 m-5 flex-grow rounded-3xl cursor-pointer" style={{
            backgroundColor: 'rgb(242,238,243)',
            background: 'linear-gradient(120deg, rgba(242,238,243,1) 0%, rgba(241,236,243,1) 43%, rgba(235,221,240,1) 71%, rgba(228,209,235,1) 100%)'
          }}>
            <p className="py-3 font-black text-2xl">{item.title}</p>
            <p>{item.description}</p>
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
