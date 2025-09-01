import React, { useEffect, useRef, useState } from "react";
import "./ArrowHint.scss";

export function ArrowHint({ containerRef }) {
  const [showRight, setShowRight] = useState(false);
  const [showLeft, setShowLeft] = useState(false);

  useEffect(() => {
    function checkScroll() {
      if (!containerRef.current) return;
      const el = containerRef.current;
      setShowRight(el.scrollLeft + el.offsetWidth < el.scrollWidth - 5);
      setShowLeft(el.scrollLeft > 5);
    }
    checkScroll();
    if (!containerRef.current) return;
    containerRef.current.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);
    return () => {
      if (!containerRef.current) return;
      containerRef.current.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [containerRef]);

  return (
    <>
      {showRight && (
        <div className="arrow-hint right">
          <span className="arrow-light">→</span>
        </div>
      )}
      {showLeft && (
        <div className="arrow-hint left">
          <span className="arrow-light">←</span>
        </div>
      )}
    </>
  );
}
