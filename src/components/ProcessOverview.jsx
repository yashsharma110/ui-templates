import React from "react";

const ProcessOverview = () => {
  return (
    <div className="w-full h-full bg-white">
      <svg
        viewBox="30 0 1800 780"
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
              300 + i * 50
            } 600, 600 610`}
            stroke="black"
            strokeWidth="2"
            fill="none"
          />
        ))}

        {/* Funnel triangles */}
        <polygon points="560,460 560,760 930,610" fill="black" />
        <polygon points="610,460 610,760 950,610" fill="black" />
        <line
          x1="610"
          y1="460"
          x2="610"
          y2="760"
          stroke="white"
          strokeWidth="2"
        />
        <polygon points="660,460 660,760 950,610" fill="black" />
        <line
          x1="660"
          y1="460"
          x2="660"
          y2="760"
          stroke="white"
          strokeWidth="2"
        />

        {/* Output line */}
        <line
          x1="700"
          y1="610"
          x2="1850"
          y2="610"
          stroke="black"
          strokeWidth="2"
        />

        {/* Label */}
        <text
          x="680"
          y="780"
          fontSize="18"
          fontFamily="Satoshi"
          fill="black"
          textAnchor="middle"
        >
          Multichannel collection
        </text>

        {/* Text block */}
        <foreignObject x="410" y="30" width="960" height="360">
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{ textAlign: "right", fontFamily: "Satoshi" }}
          >
            <h2
              style={{
                fontSize: "45px",
                fontWeight: "400",
                marginBottom: "16px",
              }}
            >
              Process Overview
            </h2>
            <h3
              style={{
                fontSize: "36px",
                fontWeight: "900",
                marginBottom: "30px",
              }}
            >
              Collect
            </h3>
            <p
              style={{ fontSize: "24px", lineHeight: "1.2", fontWeight: "400" }}
            >
              Efficiently gather invoices from diverse channels and formats.
              Utilize robust automated data capture mechanisms to seamlessly
              collect invoices from various sources, including email
              attachments, cloud storage platforms, direct uploads, and scanned
              documents. This ensures a centralized repository, facilitating
              streamlined processing and reducing the risk of misplaced or
              overlooked invoices.
            </p>
          </div>
        </foreignObject>
      </svg>
    </div>
  );
};

export default ProcessOverview;
