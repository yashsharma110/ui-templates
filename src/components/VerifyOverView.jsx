import React from "react";

const VerifyOverview = () => {
  return (
    <div className="w-full h-full bg-white overflow-hidden flex items-center justify-center p-8">
      <svg viewBox="0 0 1000 400" className="w-full h-full">
        {/* Text Content */}
        <foreignObject x="20" y="58" width="600" height="200">
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{ textAlign: "left", fontFamily: "Arial, sans-serif" }}
          >
            <h2 style={{ fontSize: "24px", fontWeight: 100, margin: 0 }}>
              Process Overview
            </h2>
            <h3 style={{ fontSize: "18px", fontWeight: 800, margin: "12px 0" }}>
              Verify
            </h3>
            <p style={{ fontSize: "10px", lineHeight: 1.4, margin: 0 }}>
              Ensuring data integrity through meticulous human review.
              <br />A dual-layer verification process complemented by
              human-augmented vetting, where the selected invoice details will
              <br />
              be attested for accuracy, consistency & compliance with
              organizational policies & regulatory standards, thereby
              <br />
              proving error-free output.
            </p>
          </div>
        </foreignObject>

        {/* Horizontal lines input */}
        {[...Array(5)].map((_, i) => (
          <line
            key={i}
            x1={50}
            y1={260 + i * 12}
            x2={450}
            y2={260 + i * 12}
            stroke="black"
            strokeWidth="2"
          />
        ))}

        {/* 3D Panels: front (black), mid (gray), back (light gray) */}
        <g transform="translate(450, 400)">
          {/* Front panel */}
          <polygon points="0,0 80,-160 150,-150 70,10" fill="black" />
          {/* Mid panel */}
          <polygon points="120,0 200,-160 270,-150 190,10" fill="#999" />
          {/* Back panel */}
          <polygon points="240,0 320,-160 390,-150 310,10" fill="#ccc" />
        </g>

        {/* Output horizontal line */}
        <line
          x1="460"
          y1="260"
          x2="1000"
          y2="260"
          stroke="black"
          strokeWidth="2"
        />

        {/* Panel labels */}
        <text
          x="75"
          y="300"
          fontSize="10"
          fontFamily="Arial, sans-serif"
          fill="black"
          textAnchor="middle"
        >
          First Layer of Verification
        </text>
        <text
          x="195"
          y="300"
          fontSize="10"
          fontFamily="Arial, sans-serif"
          fill="black"
          textAnchor="middle"
        >
          Second Layer of Verification
        </text>
        <text
          x="315"
          y="300"
          fontSize="10"
          fontFamily="Arial, sans-serif"
          fill="black"
          textAnchor="middle"
        >
          Human Reviewer
        </text>
      </svg>
    </div>
  );
};

export default VerifyOverview;
