import React from 'react';

interface ScrollListItem {
  title: string;
  content: string;
}

interface ScrollListProps {
  items: ScrollListItem[];
}

const ScrollList: React.FC<ScrollListProps> = ({ items = [] }) => {
  return (
    <div className="flex overflow-hidden">
      <section className="flex as-scroll" style={{ minWidth: "100%" }}>
        {items.map((item, index) => (
          <div key={index} className="m-5 flex-grow text-center gray-gradient">
            {item.title}
            <p>{item.content}</p>
          </div>
        ))}
      </section>
      <section className="flex as-scroll" style={{ minWidth: "100%" }} aria-hidden="true">
        {items.map((item, index) => (
          <div key={index} className="m-5 flex-grow text-center gray-gradient">
            {item.title}
            <p>{item.content}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default ScrollList;
