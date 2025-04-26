import React from "react";

const AdvantagesOverview = () => {
  return (
    <div className="w-full h-full bg-white overflow-hidden">
      <svg viewBox="0 0 1400 800" className="w-full h-full">
        {/* Embedded text via foreignObject */}
        <foreignObject x="0" y="100" width="1200" height="500">
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            <h2
              style={{
                fontSize: "45px",
                fontWeight: 50,
                margin: 0,
                marginBottom: "16px",
              }}
            >
              MultiLayered Advantages
            </h2>
            <p
              style={{
                fontSize: "24px",
                lineHeight: 1.6,
                margin: "30px 0",
              }}
            >
              <p
                style={{
                  fontWeight: 700,
                  margin: "30px 0",
                }}
              >
                Effortlessly synchronize with existing systems
              </p>
              <p
                style={{
                  fontWeight: 700,
                  margin: "30px 0",
                }}
              >
                Adherence to compliance
              </p>
              <p
                style={{
                  fontWeight: 700,
                  margin: "30px 0",
                }}
              >
                Smart OCR Capabilities
              </p>
              <p
                style={{
                  fontWeight: 700,
                  margin: "30px 0",
                }}
              >
                Mobile App
              </p>
              <p
                style={{
                  fontWeight: 700,
                  margin: "30px 0",
                }}
              >
                Easy scalability
              </p>
            </p>
            <div style={{ marginTop: "50px" }}>
              <button
                style={{
                  padding: "15px 25px",
                  marginRight: "20px",
                  backgroundColor: "black",
                  color: "white",
                  border: "none",
                  fontSize: "20px",
                }}
              >
                Contact Us
              </button>
              <button
                style={{
                  padding: "15px 25px",
                  backgroundColor: "#ccc",
                  color: "black",
                  border: "none",
                  fontSize: "20px",
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
          x="550"
          y="0"
          width="700"
          height="700"
          preserveAspectRatio="xMidYMid meet"
        />
      </svg>
    </div>
  );
};

export default AdvantagesOverview;
