import React from "react";

const Header = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "calc(100vh - 60px)",
        backgroundColor: "red",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          backgroundColor: "#000",
          opacity: "0.4",
          position: "absolute",
          inset: "0",
          zIndex: "1",
        }}
      />

      <h1
        style={{
          fontSize: "50px",
          fontWeight: "500",
          letterSpacing: "1.4px",
          lineHeight: "1.5",
          color: "#FFF",
          zIndex: "10",
          textTransform: "uppercase",
        }}
      >
        Hamza Afrouss
      </h1>
      <p
        style={{
          fontSize: "30px",
          fontWeight: "500",
          letterSpacing: "1.4px",
          lineHeight: "1.5",
          zIndex: "10",
          color: "#FFF",
          textTransform: "uppercase",
        }}
      >
        SOFTWARE ENGINEER, FULL STACK DEVELOPER.
      </p>
      <h1></h1>
    </div>
  );
};

export default Header;
