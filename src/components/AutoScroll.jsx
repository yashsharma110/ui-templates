import React, { useRef, useEffect, useState } from "react";

const AutoScrollSection = ({ pageCount = 4, children }) => {
  const containerRef = useRef(null);
  const [autoDone, setAutoDone] = useState(false);
  const timers = useRef([]);

  // clear any pending timeouts
  const clearTimers = () => {
    timers.current.forEach((t) => clearTimeout(t));
    timers.current = [];
  };

  // step through pages: pageIndex runs 1 → pageCount - 1
  const scrollToPage = (pageWidth, pageIndex = 1) => {
    if (!containerRef.current) return;
    // if we've reached beyond the last page, finish up
    if (pageIndex >= pageCount) {
      setAutoDone(true);
      return;
    }

    containerRef.current.scrollTo({
      left: pageWidth * pageIndex,
      behavior: "smooth",
    });

    // queue the next scroll
    const t = setTimeout(() => {
      scrollToPage(pageWidth, pageIndex + 1);
    }, 1000);
    timers.current.push(t);
  };

  // start a fresh auto-scroll cycle
  const startAutoScroll = () => {
    clearTimers();
    setAutoDone(false);

    const container = containerRef.current;
    if (!container) return;

    // compute each “page” width
    const pageWidth = container.scrollWidth / pageCount;

    // reset to first page immediately
    container.scrollTo({ left: 0, behavior: "auto" });

    // after a short pause, step to page 2, 3, 4…
    const t0 = setTimeout(() => {
      scrollToPage(pageWidth, 1);
    }, 500);
    timers.current.push(t0);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === container) {
            if (entry.isIntersecting) {
              // user just scrolled **into** this section
              startAutoScroll();
            } else {
              // user left this section → cancel any remaining timeouts
              clearTimers();
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    obs.observe(container);
    return () => {
      obs.unobserve(container);
      clearTimers();
    };
  }, [pageCount]);

  return (
    <div
      ref={containerRef}
      className={`
        flex w-full h-screen
        overflow-x-hidden
        overflow-y-hidden scrollbar-hide
      `}
    >
      {children}
    </div>
  );
};

export default AutoScrollSection;
