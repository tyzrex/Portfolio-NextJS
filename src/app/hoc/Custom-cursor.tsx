"use client";
import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  //@ts-ignore
  const throttle = (func, limit) => {
    let inThrottle: any;
    return function () {
      const args = arguments;
      //@ts-ignore
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  };

  const onMouseMove = throttle((e: any) => {
    setPosition({ x: e.clientX, y: e.clientY });
    const invertRadius = 50; // radius in pixels

    document.querySelectorAll(".invertible-text").forEach((el) => {
      const rect = el.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      const distance = Math.sqrt(
        Math.pow(x - e.clientX, 2) + Math.pow(y - e.clientY, 2)
      );
      if (distance < invertRadius) {
        el.classList.add("inverted");
      } else {
        el.classList.remove("inverted");
      }
    });
  }, 10);

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div
      className={`cursor ${hidden ? "cursor--hidden" : ""} hidden xl:block`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
};

export default CustomCursor;
