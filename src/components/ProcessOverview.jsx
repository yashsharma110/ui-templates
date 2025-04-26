import React from "react";

const ProcessOverview = () => {
  return (
    <div className="w-full h-full bg-white">
      <svg
        viewBox="0 0 1800 780"
        className="w-full h-full"
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

        {/* Output line */}
        <line
          x1="600"
          y1="610"
          x2="1800"
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
        <foreignObject x="410" y="30" width="960" height="360">
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
