import React from "react";

const PricingTable = () => {
  const features = [
    {
      name: "Cost",
      scale: "0.30 $ per document",
      enterprise: "0.30 $ per document",
    },
    {
      name: "Number of Users",
      scale: "Upto 10 Accounts",
      enterprise: "Unlimited",
    },
    {
      name: "AI Agentic Systems for Data Extraction",
      scale: "Yes",
      enterprise: "Yes",
    },
    {
      name: "Triple Layered Validation and Verification",
      scale: "Yes",
      enterprise: "Yes",
    },
    { name: "Human Verification", scale: "Yes", enterprise: "Yes" },
    { name: "Results in Desired Formats", scale: "Yes", enterprise: "Yes" },
    { name: "Security", scale: "Yes", enterprise: "Yes" },
    { name: "APIs for Integration", scale: "Yes", enterprise: "Yes" },
    {
      name: "Customizable Data Field Extraction",
      scale: "Yes",
      enterprise: "Yes",
    },
    { name: "Scalability Support", scale: "Yes", enterprise: "Yes" },
    { name: "Role Based User Access Control", scale: "No", enterprise: "Yes" },
    {
      name: "Customizable Data Retention Policy",
      scale: "No",
      enterprise: "Yes",
    },
    { name: "Accounts Manager", scale: "Yes", enterprise: "Yes" },
  ];

  return (
    <section
      style={{
        padding: "0",
        fontFamily: "Satoshi",
        maxWidth: "100%",
        margin: "0 auto",
      }}
    >
      <h2
        style={{ fontSize: "2.986rem", fontWeight: 900, marginBottom: "40px" }}
      >
        Our Pricing
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.5fr 1fr 1fr",
          gap: "12px",
          fontSize: "1.2rem",
          padding: "20px 100px",
          fontWeight: 400,
        }}
      >
        <div style={{ fontWeight: 700, fontSize: "2rem" }}>Features</div>
        <div style={{ fontWeight: 700, fontSize: "2rem" }}>Scale As You Go</div>
        <div style={{ fontWeight: 700, fontSize: "2rem" }}>Enterprise</div>

        {features.map((feature, index) => (
          <React.Fragment key={index}>
            <div>{feature.name}</div>
            <div>{feature.scale}</div>
            <div>{feature.enterprise}</div>
          </React.Fragment>
        ))}
      </div>

      {/* Centered button below the table */}
      <div style={{ textAlign: "center", marginTop: "32px", marginLeft:"-150px" }}>
        <button
          style={{
            padding: "1rem 1.5rem",
            backgroundColor: "#000",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            fontSize: "1rem",
            width: "137px",
            height: "57px",
            fontFamily: "Satoshi",
            lineHeight: 1.37,
          }}
        >
          Deploy
        </button>
      </div>
    </section>
  );
};

export default PricingTable;
