import React from "react";
import styles from "./Skills.module.css";
import CustomHeading from "../CustomHeading";

const Skills = () => {
  return (
    <div
      id = "expertise"
      style={{
        padding: "40px 30px",
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#F1EFEF",
      }}
    >
      <CustomHeading title="My Expertise" subTitle={"Brief of what i know"} />

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          gap: "100px",
          alignItems: "center",
          flexDirection: "row",
          marginTop : "40px",
        }}
      >
        <div style={{ border: "4px #352fd9 solid", padding: "20px", width: "40%" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "15px",
              marginBottom: "40px",
            }}
          >
            <p>Icon</p>
            <h2
              style={{
                fontSize: "27px",
                fontWeight: "700",
                color : "#0F0F0F",
                textTransform: "capitalize",
              }}
            >
              Software Development
            </h2>
          </div>
          <p className={styles.skillDesc}>
            Experienced in both functional and OOP: JavaScript, TypeScript.
          </p>
        </div>

        <div style={{ border: "4px #352fd9 solid", padding: "20px", width: "40%" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "15px",
              marginBottom: "40px",
            }}
          >
            <p>Icon</p>
            <h2
              style={{
                fontSize: "27px",
                fontWeight: "700",
                color : "#0F0F0F",
                textTransform: "capitalize",
              }}
            >
              Frontend Dev
            </h2>
          </div>
          <p className={styles.skillDesc}>
          Experienced in HTML, CSS, JS, ReactJS framework.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
