import React, { useEffect } from "react";

const ProcessOverview = () => {
  useEffect(() => {
    const lines = document.querySelectorAll(".flow-line");
    const outputLine = document.querySelector(".output-line");

    // Initialize stroke dash styles on the curves
    lines.forEach((path) => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;
    });

    // Initialize the output line too
    if (outputLine) {
      const length = outputLine.getTotalLength();
      outputLine.style.strokeDasharray = length;
      outputLine.style.strokeDashoffset = length;
    }

    const handleScroll = () => {
      const scrollLeft = window.scrollX;
      const progress = Math.min(scrollLeft / 100, 1);

      // Animate each curve
      lines.forEach((path) => {
        const length = path.getTotalLength();
        path.style.strokeDashoffset = length * (1 - progress);
      });

      // Animate the straight output line starting at 90% of that progress
      if (outputLine) {
        const length = outputLine.getTotalLength();
        const straightLineProgress = Math.max(0, (progress - 0.9) / 0.1);
        outputLine.style.strokeDashoffset = length * (1 - straightLineProgress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-[3000px] h-screen bg-white overflow-hidden">
      <style>
        {`
          .flow-line, .output-line {
            transition: stroke-dashoffset 0.2s ease-out;
          }
        `}
      </style>

      <svg
        width="3000"
        height="100%"
        viewBox="0 0 4000 800"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Diamond nodes */}
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={i} transform={`translate(${80 + i * 60}, 80)`}>
            <rect
              x="-62"
              y="-20"
              width="20"
              height="20"
              fill="black"
              transform="rotate(45)"
            />
          </g>
        ))}

        {/* Curved flow lines */}
        {[0, 1, 2, 3, 4].map((i) => (
          <path
            key={`line-${i}`}
            className="flow-line"
            d={`M ${50 + i * 60} 30 C ${60 + i * 60} 700, ${
              200 + i * 50
            } 600, 500 610`}
            stroke="black"
            strokeWidth="2"
            fill="none"
          />
        ))}

        {/* Funnel triangles */}
        <polygon points="410,460 410,760 780,610" fill="black" />
        <polygon points="460,460 460,760 800,610" fill="black" />
        <line
          x1="460"
          y1="460"
          x2="460"
          y2="760"
          stroke="white"
          strokeWidth="2"
        />
        <polygon points="510,460 510,760 800,610" fill="black" />
        <line
          x1="510"
          y1="460"
          x2="510"
          y2="760"
          stroke="white"
          strokeWidth="2"
        />

        {/* --- RESTORED OUTPUT LINE --- */}
        <line
          className="output-line"
          x1="600" /* match the curves' end x */
          y1="610" /* match the curves' end y */
          x2="3000" /* extend to the right edge */
          y2="610"
          stroke="black"
          strokeWidth="2"
        />

        {/* Label */}
        <text
          x="560"
          y="780"
          fontSize="18"
          fontFamily="Arial, sans-serif"
          fill="black"
          textAnchor="middle"
        >
          Multichannel collection
        </text>

        {/* Text block */}
        <foreignObject x="410" y="100" width="1000" height="500">
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{ textAlign: "right", fontFamily: "Arial, sans-serif" }}
          >
            <h2
              style={{
                fontSize: "45px",
                fontWeight: "300",
                marginBottom: "16px",
              }}
            >
              Process Overview
            </h2>
            <h3
              style={{
                fontSize: "36px",
                fontWeight: "800",
                marginBottom: "30px",
              }}
            >
              Collect
            </h3>
            <p style={{ fontSize: "18px", lineHeight: "1.2" }}>
              Efficiently gather invoices from diverse channels and formats.
              <br />
              Utilize robust automated data capture mechanisms to seamlessly
              collect invoices from various sources, including email
              <br />
              attachments, cloud storage platforms, direct uploads, and scanned
              documents. This ensures a centralized repository,
              <br />
              facilitating streamlined processing and reducing the risk of
              misplaced or overlooked invoices.
            </p>
          </div>
        </foreignObject>
      </svg>
    </div>
  );
};

export default ProcessOverview;
