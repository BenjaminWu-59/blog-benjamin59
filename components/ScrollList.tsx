"use client";
import React, { ReactNode } from "react";

const listModelData = [
  {
    name: "listOrigin",
    ariaHidden: false
  },
  {
    name: "listDuplicate",
    ariaHidden: true
  }
];

const ScrollList = ({ children }: { children: ReactNode }) => {
  return (
    <ul className="as-scroll-container py-5 flex overflow-hidden">
      {listModelData.map((item) => (
        <li
          key={item.name}
          className="flex as-scroll-animate"
          aria-hidden={item.ariaHidden}
        >
          {children}
        </li>
      ))}
    </ul>
  );
};

export default ScrollList;