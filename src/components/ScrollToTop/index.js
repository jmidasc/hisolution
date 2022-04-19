import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa";

import "./index.scss";

export default () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <div
      className="btn-to-top"
      onClick={scrollToTop}
      style={{ visibility: visible ? "visible" : "hidden" }}
    >
      <FaArrowUp />
    </div>
  );
};
