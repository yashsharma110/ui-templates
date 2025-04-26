import React from "react";

const AdvantagesOverview = () => {
  return (
    <div className="w-full h-full bg-white overflow-hidden">
      <svg viewBox="0 0 1200 600" className="w-full h-full">
        {/* Embedded text via foreignObject */}
        <foreignObject x="210" y="100" width="400" height="500">
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            <h2
              style={{
                fontSize: "32px",
                fontWeight: 50,
                margin: 0,
                marginBottom: "16px",
              }}
            >
              MultiLayered Advantages
            </h2>
            <p
              style={{
                fontSize: "18px",
                lineHeight: 1.6,
                margin: "30px 0",
              }}
            >
              <p
                style={{
                  fontWeight: 700,
                  margin: "20px 0",
                }}
              >
                Effortlessly synchronize with existing systems
              </p>
              <p
                style={{
                  fontWeight: 700,
                  margin: "20px 0",
                }}
              >
                Adherence to compliance
              </p>
              <p
                style={{
                  fontWeight: 700,
                  margin: "20px 0",
                }}
              >
                Smart OCR Capabilities
              </p>
              <p
                style={{
                  fontWeight: 700,
                  margin: "20px 0",
                }}
              >
                Mobile App
              </p>
              <p
                style={{
                  fontWeight: 700,
                  margin: "20px 0",
                }}
              >
                Easy scalability
              </p>
            </p>
            <div style={{ marginTop: "24px" }}>
              <button
                style={{
                  padding: "8px 16px",
                  marginRight: "12px",
                  backgroundColor: "black",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                }}
              >
                Contact Us
              </button>
              <button
                style={{
                  padding: "8px 16px",
                  backgroundColor: "#ccc",
                  color: "black",
                  border: "none",
                  borderRadius: "4px",
                }}
              >
                Contact Us
              </button>
            </div>
          </div>
        </foreignObject>

        {/* Right Custom Design (replace href with your image path) */}
        <image
          href="/design.PNG"
          x="650"
          y="100"
          width="500"
          height="500"
          preserveAspectRatio="xMidYMid meet"
        />
      </svg>
    </div>
  );
};

export default AdvantagesOverview;
