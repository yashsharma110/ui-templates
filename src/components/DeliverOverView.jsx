import React from "react";

const DeliverOverview = () => {
  return (
    <div className="w-full h-full bg-white overflow-hidden flex items-center justify-center p-8">
      <svg viewBox="0 0 1200 400" className="w-full h-full">
        {/* Text Content */}
        <foreignObject x="20" y="20" width="500" height="200">
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{ textAlign: "left", fontFamily: "Arial, sans-serif" }}
          >
            <h2 style={{ fontSize: "36px", fontWeight: 300, margin: 0 }}>
              Process Overview
            </h2>
            <h3 style={{ fontSize: "28px", fontWeight: 800, margin: "8px 0" }}>
              Deliver
            </h3>
            <p style={{ fontSize: "16px", lineHeight: 1.4, margin: 0 }}>
              Receive clean, verified invoices ready for instant downstream
              processing.
              <br />
              Each invoice is delivered in a structured & standardized format,
              ensuring immediate usability for your financial systems.
              <br />
              Sync with ERP platforms or internal IT systems with ease, built
              for seamless interoperability, integrating with existing workflows
              to enable faster approvals.
            </p>
          </div>
        </foreignObject>

        {/* Curved diverging lines */}
        {[-2, -1, 0, 1, 2].map((offset, i) => (
          <path
            key={i}
            d={`M 50 260 C 400 260, 700 ${260 + offset * 60}, 1150 ${
              260 + offset * 60
            }`}
            stroke="black"
            strokeWidth="2"
            fill="none"
          />
        ))}

        {/* Diamond at end */}
        <g transform="translate(1150, 260) rotate(45)">
          <rect x="-10" y="-10" width="20" height="20" fill="black" />
        </g>
      </svg>
    </div>
  );
};

export default DeliverOverview;
