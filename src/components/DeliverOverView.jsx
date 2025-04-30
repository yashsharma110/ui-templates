import React from "react";

const DeliverOverview = () => {
  return (
    <div className="w-full h-full bg-white overflow-hidden flex items-center justify-center p-8">
      <svg viewBox="20 0 1000 400" className="w-full h-full">
        {/* Text Content */}
        <foreignObject x="20" y="10" width="900" height="360">
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{ textAlign: "left", fontFamily: "Arial, sans-serif" }}
          >
            <h2 style={{ fontSize: "24px", fontWeight: 100, margin: 0 }}>
              Process Overview
            </h2>
            <h3 style={{ fontSize: "18px", fontWeight: 800, margin: "23px 0" }}>
              Deliver
            </h3>
            <p style={{ fontSize: "14px", lineHeight: 1.2, margin: "-5px 0" }}>
              Receive clean, verified invoices ready for instant downstream
              processing.
              <br />
              Each invoice is delivered in a structured & standardized format,
              ensuring immediate <br></br>usability for your financial systems.
              Sync with ERP platforms or internal IT systems <br></br>with ease,
              built for seamless interoperability, integrating with
              <br /> existing workflows to enable faster approvals.
            </p>
          </div>
        </foreignObject>

        {/* Curved diverging lines */}
        {[-3, -2, -1, 0, 1, 2, 3].map((offset, i) => (
          <path
            key={i}
            d={`
              M 0 310 
              C 300 310, 600 ${350 + offset * 50}, 1000 ${150 + offset * 100}
              S 1200 ${450 + offset * 120}
            `}
            stroke="black"
            strokeWidth="1"
            fill="none"
          />
        ))}

        {/* Diamond at end */}
        <g transform="translate(1200, 450) rotate(45)">
          <rect x="-10" y="-10" width="20" height="20" fill="black" />
        </g>
      </svg>
    </div>
  );
};

export default DeliverOverview;
