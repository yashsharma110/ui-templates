import React from "react";

const ExtractOverview = () => {
  return (
    <div className="w-full h-full bg-white">
      <svg viewBox="0 0 1000 400" className="w-full h-full">
        {/* Text overlay */}
        <foreignObject x="20" y="60" width="960" height="360">
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{ textAlign: "left", fontFamily: "Arial, sans-serif" }}
          >
            <h2 style={{ fontSize: "24px", fontWeight: 100, margin: 0 }}>
              Process Overview
            </h2>
            <h3 style={{ fontSize: "18px", fontWeight: 800, margin: "14px 0" }}>
              Extract
            </h3>
            <p style={{ fontSize: "10px", lineHeight: 1.4, margin: "18px 0" }}>
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

        {/* 3D block image placeholder */}
        <image
          href="/public/design1.png"
          x="60"
          y="210"
          width="280"
          height="200"
          preserveAspectRatio="xMidYMid meet"
        />

        {/* Curved flow-lines */}
        {[...Array(7)].map((_, i) => (
          <path
            key={i}
            d={`M 250 340 C 300 ${290 + i * 20}, 700 ${290 + i * 20}, 780 ${
              290 + i * 20
            }`}
            stroke="black"
            strokeWidth="2"
            fill="none"
          />
        ))}

        {/* Right output box */}
        <rect x="700" y="280" width="160" height="160" fill="black" />
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
            x="860"
            y={265 + i * 20}
            fontSize="10"
            fontFamily="Arial, sans-serif"
            fill="white"
            textAnchor="middle"
          >
            {label}
          </text>
        ))}

        {/* Footnotes */}
        <text
          x="190"
          y="420"
          fontSize="10"
          fontFamily="Arial, sans-serif"
          fill="black"
          textAnchor="middle"
        >
          Proprietary Vision LLM Models
        </text>
        <text
          x="860"
          y="415"
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
