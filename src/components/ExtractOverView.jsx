import React from "react";

const ExtractOverview = () => {
  return (
    <div className="w-full h-full bg-white">
      <svg viewBox="0 0 1000 400" className="w-full h-full">
        <line
          x1="0"
          y1="322"
          x2="230"
          y2="322"
          stroke="black"
          strokeWidth="1"
        />
        {/* 3D block image placeholder */}
        <image
          href="/design1.PNG"
          x="60"
          y="170"
          width="280"
          height="200"
          preserveAspectRatio="xMidYMid meet"
        />
        {/* Text overlay */}
        <foreignObject x="20" y="18" width="960" height="360">
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{ textAlign: "left", fontFamily: "Arial, sans-serif" }}
          >
            <h2 style={{ fontSize: "24px", fontWeight: 100, margin: 0 }}>
              Process Overview
            </h2>
            <h3 style={{ fontSize: "18px", fontWeight: 800, margin: "23px 0" }}>
              Extract
            </h3>
            <p style={{ fontSize: "10px", lineHeight: 1.2, margin: "-7px 0" }}>
              Intelligent AI instantly captures essential invoice information
              with accuracy.
              <br />
              Employ intelligent data extraction technologies to identify and
              retrieve critical invoice data points such as invoice
              <br />
              number, date, vendor details, line items, quantities, and totals.
              The extracted data is then structured into a <br />
              standardized, tabular format, ensuring compatibility with
              downstream financial systems and facilitating efficient
              <br />
              processing.
            </p>
          </div>
        </foreignObject>

        {/* Curved flow-lines */}
        {[...Array(7)].map((_, i) => (
          <path
            key={i}
            d={`M 260 317 C 370 ${250 + i * 20}, 750 ${250 + i * 20}, 780 ${
              250 + i * 20
            }`}
            stroke="black"
            strokeWidth="1"
            fill="none"
          />
        ))}

        {/* Right output box */}
        <rect x="650" y="230" width="160" height="160" fill="black" />
        {[
          "Invoice Creator",
          "Invoice Date",
          "Line Item",
          "Line Item 1",
          "Line Item 2",
          "Total",
          "VAT",
        ].map((label, i) => (
          <text
            key={i}
            x="730"
            y={255 + i * 20}
            fontSize="10"
            fontFamily="Arial, sans-serif"
            fill="white"
            textAnchor="middle"
          >
            {label}
          </text>
        ))}

        {/* --- 5 Output Lines from Right of Black Box --- */}
        {[...Array(6)].map((_, i) => (
          <line
            key={`output-line-${i}`}
            x1="810" // 650 + 160 = 810 (right edge of black box)
            y1={260 + i * 20} // vertical spacing
            x2="2000" // make them super long (into next page)
            y2={250 + i * 20}
            stroke="black"
            strokeWidth="1"
          />
        ))}

        {/* Footnotes */}
        <text
          x="190"
          y="380"
          fontSize="10"
          fontFamily="Arial, sans-serif"
          fill="black"
          textAnchor="middle"
        >
          Proprietary Vision LLM Models
        </text>
        <text
          x="725"
          y="400"
          fontSize="10"
          fontFamily="Arial, sans-serif"
          fill="black"
          textAnchor="middle"
        >
          Structured Extraction
        </text>
      </svg>
    </div>
  );
};

export default ExtractOverview;
