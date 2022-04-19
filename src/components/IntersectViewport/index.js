import React from "react";

import "./index.scss";

import { useIntersectionObserver } from "react-intersection-observer-hook";

export default ({ children }) => {
  const [ref, { entry }] = useIntersectionObserver();
  const isVisible = entry && entry.isIntersecting;
  console.log(isVisible);
  return (
    <div ref={ref} className={`intersect-container ${isVisible ? "show" : "hide"}`}>
      {children}
    </div>
  );
};
