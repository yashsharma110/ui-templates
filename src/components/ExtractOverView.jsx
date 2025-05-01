import React from "react";

const ExtractOverview = () => {
  return (
    <div className="w-full h-full bg-white">
      <svg viewBox="20 0 1000 400" className="w-full h-full">
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
          y="186"
          width="280"
          height="180"
          preserveAspectRatio="xMidYMid meet"
        />
        {/* Text overlay */}
        <foreignObject x="20" y="18" width="960" height="360">
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{ textAlign: "left", fontFamily: "Satoshi" }}
          >
            <h2 style={{ fontSize: "24px", fontWeight: 400, margin: 0 }}>
              Process Overview
            </h2>
            <h3 style={{ fontSize: "18px", fontWeight: 900, margin: "23px 0" }}>
              Extract
            </h3>
            <p style={{ fontSize: "14px", lineHeight: 1.2, margin: "-7px 0", fontWeight: 400 }}>
              Intelligent AI instantly captures essential invoice information
              with accuracy. Employ intelligent data extraction technologies
              <br></br> to identify and retrieve critical invoice data points
              such as invoice number, date, vendor details, line items,
              quantities, and totals.<br></br>The extracted data is then
              structured into a standardized, tabular format, ensuring
              compatibility with downstream financial systems<br></br> and
              facilitating efficient processing.
            </p>
          </div>
        </foreignObject>

        {/* Curved flow-lines */}
        {[...Array(7)].map((_, i) => (
          <path
            key={i}
            d={`M 250 319 C 390 ${250 + i * 20}, 750 ${250 + i * 20}, 750 ${
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
            fontFamily="Satoshi"
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
          fontFamily="Satoshi"
          fill="black"
          textAnchor="middle"
        >
          Proprietary Vision LLM Models
        </text>
        <text
          x="725"
          y="400"
          fontSize="10"
          fontFamily="Satoshi"
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
