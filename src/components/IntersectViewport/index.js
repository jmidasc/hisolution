import React from "react";

import "./index.scss";

import { useIntersectionObserver } from "react-intersection-observer-hook";

export default ({ children, className }) => {
  const [ref, { entry }] = useIntersectionObserver();
  const isVisible = entry && entry.isIntersecting;
  return (
    <div ref={ref} className={`${className} intersect-container ${isVisible ? "show" : "hide"}`}>
      {children}
    </div>
  );
};
