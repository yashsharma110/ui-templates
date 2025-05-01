import React from "react";

const VerifyOverview = () => {
  return (
    <div className="w-full h-full bg-white overflow-hidden flex items-center justify-center p-8">
      <svg viewBox="20 0 1000 400" className="w-full h-full">
        {/* Text Content */}
        <foreignObject x="20" y="10" width="900" height="360">
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{ textAlign: "left", fontFamily: "Satoshi" }}
          >
            <h2 style={{ fontSize: "24px", fontWeight: 400, margin: 0 }}>
              Process Overview
            </h2>
            <h3 style={{ fontSize: "18px", fontWeight: 900, margin: "23px 0" }}>
              Verify
            </h3>
            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.2,
                margin: "-5px 0",
                fontWeight: 400,
              }}
            >
              Ensuring data integrity through meticulous human review.
              <br />A dual-layer verification process complemented by
              human-augmented vetting, where<br></br> the selected invoice
              details will be attested for accuracy, consistency & compliance
              with organizational<br></br> policies & regulatory standards,
              thereby proving error-free output.
            </p>
          </div>
        </foreignObject>

        {/* Horizontal lines input */}
        {[...Array(6)].map((_, i) => (
          <line
            key={i}
            x1={0}
            y1={258.5 + i * 20}
            x2={250}
            y2={258.5 + i * 20}
            stroke="black"
            strokeWidth="1"
          />
        ))}

        {/* 3D Panels: front (black), mid (gray), back (light gray) */}
        <g transform="translate(250, 390)">
          {/* Front (Black) Panel */}
          <polygon points="0,0 0,-170 70,-180 70,-10" fill="black" />
          {/* Middle (Gray) Panel */}
          <polygon points="140,0 140,-170 210,-180 210,-10" fill="#999" />
          {/* Back (Light Gray) Panel */}
          <polygon points="280,0 280,-170 350,-180 350,-10" fill="#ccc" />
          <line
            x1="0"
            y1="-50"
            x2="140"
            y2="-50"
            stroke="black"
            strokeWidth="1"
          />
          <line
            x1="0"
            y1="-70"
            x2="140"
            y2="-70"
            stroke="black"
            strokeWidth="1"
          />
          <line
            x1="0"
            y1="-90"
            x2="140"
            y2="-90"
            stroke="black"
            strokeWidth="1"
          />
          <line
            x1="0"
            y1="-110"
            x2="140"
            y2="-110"
            stroke="black"
            strokeWidth="1"
          />
          <line
            x1="210"
            y1="-50"
            x2="280"
            y2="-50"
            stroke="black"
            strokeWidth="1"
          />
          <line
            x1="210"
            y1="-70"
            x2="280"
            y2="-70"
            stroke="black"
            strokeWidth="1"
          />
          <line
            x1="210"
            y1="-90"
            x2="280"
            y2="-90"
            stroke="black"
            strokeWidth="1"
          />
          <line
            x1="210"
            y1="-110"
            x2="280"
            y2="-110"
            stroke="black"
            strokeWidth="1"
          />
        </g>

        {/* Output horizontal line */}
        <line
          x1="600"
          y1="310"
          x2="1050"
          y2="310"
          stroke="black"
          strokeWidth="1"
        />

        {/* Panel labels */}
        <text
          x="280"
          y="400"
          fontSize="10"
          fontFamily="Satoshi"
          fill="black"
          textAnchor="middle"
        >
          First Layer of Verification
        </text>
        <text
          x="420"
          y="400"
          fontSize="10"
          fontFamily="Satoshi"
          fill="black"
          textAnchor="middle"
        >
          Second Layer of Verification
        </text>
        <text
          x="570"
          y="400"
          fontSize="10"
          fontFamily="Satoshi"
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
