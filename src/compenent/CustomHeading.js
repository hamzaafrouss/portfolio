import React from "react";

const CustomHeading = ({ title, subTitle }) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 0",
      }}
    >
      <p
        style={{
          margin: 0,
          userSelect: "none",
          textTransform: "uppercase",
          fontSize: "16px",
          fontWeight: "700",
          color: "#362FD9",
        }}
      >
        {subTitle}
      </p>
      <p
        style={{
          lineHeight: "0.8",
          userSelect: "none",
          fontSize: "65px",
          fontWeight: "400",
        }}
      >
        {title}
      </p>
    </div>
  );
};

export default CustomHeading;
