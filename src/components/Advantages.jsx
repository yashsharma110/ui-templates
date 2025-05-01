import React from "react";

const ADVANTAGES = [
  {
    title: "Effortlessly synchronize with existing systems",
    text: "Siro integrates smoothly with a variety of ERP & IT platforms, ensuring that invoice data flows seamlessly into your organization’s financial ecosystem. This compatibility reduces the need for manual data entry and minimizes the risk of errors, unlocking space for operational efficiency.",
  },
  {
    title: "Adherence to compliance",
    text: "Platform’s compliance management features automatically verify that all invoices meet relevant regulatory requirements, reducing the risk of non-compliance penalties and ensuring smooth audits. This is particularly crucial in industries with stringent financial regulations.",
  },
  {
    title: "Smart OCR Capabilities",
    text: "Processes invoices with precision across a multitude of formats, languages & font styles. The robust OCR technology is made to comply & handle various formats of documents, extracting data which matches that of the original, regardless of the complexity.",
  },
  {
    title: "Mobile App",
    text: "The companion application allows users to capture, upload & track their invoices on the go. This paves the way for faster submissions, ease of use from anywhere, and removing the hurdle along with supporting real-time visibility across your team’s AP operations.",
  },
  {
    title: "Easy scalability",
    text: "Effortlessly scale from processing hundreds to tens of thousands of invoices without disruption. Built to support growing volumes, ensuring your AP automation keeps pace with business expansion.",
  },
];

const AdvantagesPage = () => {
  return (
    <div className="w-full h-full bg-white">
      <svg viewBox="0 0 1200 800" className="w-full h-full">
        <foreignObject x="20" y="20" width="700" height="860">
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{
              fontFamily: "Satoshi",
              width: "100%",
              height: "100%",
              boxSizing: "border-box",
              padding: "40px",
            }}
          >
            {/* Header */}
            <h2
              style={{
                fontSize: "45px",
                fontWeight: 50,
                margin: 0,
                marginBottom: "50px",
              }}
            >
              MultiLayered Advantages
            </h2>

            {/* Top four items */}
            {ADVANTAGES.slice(0, 4).map((item, idx) => (
              <div key={idx} style={{ marginBottom: "40px" }}>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                    margin: 0,
                    marginBottom: "8px",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}

            {/* Last item */}
            <div>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: 600,
                  margin: 0,
                  marginBottom: "8px",
                }}
              >
                {ADVANTAGES[4].title}
              </h3>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: 1.5,
                  margin: 0,
                }}
              >
                {ADVANTAGES[4].text}
              </p>
            </div>
          </div>
        </foreignObject>
      </svg>
    </div>
  );
};

export default AdvantagesPage;
