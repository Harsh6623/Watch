"use client";

import { Children, useEffect, useRef, useState } from "react";

function Slider({ children }) {
  const arr = Children.toArray(children);
  const [els, setEls] = useState([
    arr[arr.length - 1],
    ...arr.slice(0, arr.length - 1),
  ]);

  const timer = useRef<number>(null);

  useEffect(() => {
    timer.current = setInterval(() => {
      setEls((prev) => {
        return [...prev.slice(1), prev[0]];
      });
    }, 2000);

    return () => clearInterval(timer.current);
  }, [children]);

  return (
    <div className="slider-container">
      {els.map((child, index) => (
        <div
          key={child.key}
          className="slide"
          style={{
            position: "absolute",
            left: `${index * 100}%`,
            transition: `left 0.5s ease`,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}

export default Slider;
