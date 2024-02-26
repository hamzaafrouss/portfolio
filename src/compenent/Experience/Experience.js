import React from "react";
import CustomHeading from "../CustomHeading";
import styles from "./Experience.module.css";

const Experience = () => {
  return (
    <div
      id = "experience"
      style={{
        padding: "40px 30px",
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#F1EFEF",
      }}
    >
      <CustomHeading
        title="Professional Experiences"
        subTitle={"Brief of what i experienced"}
      />

      <div
        style={{
          display: "flex",
          gap: "15px",
          flexDirection: "column",
          marginTop: "40px",
        }}
      >
        <div className={styles.experienceContainer}>
          <div>
            <div className={styles.infoContainer}>
              <p>Marrakech, Morocco</p>
              <p>https://UPXP-REWARD.com</p>
            </div>

            <p
              style={{ lineHeight: "1.7", color: "#7D7C7C", fontSize: "19px" }}
            >
              Developing the front and back-end of a web application for the management of a
              company invoices with html, Css, matrialUAI, React.js, and Node.js .
            </p>

            <div className={styles.skillContainer}>
              {["Html", "Css","MatrialUAI",  "ReactJs", "NodeJs", "ExpressJs", "MySql", "MongoDb"].map(
                (item) => {
                  return <p className={styles.skill}>{item}</p>;
                }
              )}
            </div>
          </div>
          <img src="/upxp.jpeg" />
        </div>

        <div className={styles.experienceContainer}>
          <div>
            <div className={styles.infoContainer}>
              <p>Marrakech, Morocco</p>
              <p>https://FSJES.com</p>
            </div>

            <p
              style={{ lineHeight: "1.7", color: "#7D7C7C", fontSize: "19px" }}
            >
              Developing the front of a web application for the management of a
              Meting invoices with Laravel.
            </p>

            <div className={styles.skillContainer}>
              {["Html", "Css", "Bootstrap","ReactJs","Laravel", "MySql"].map(
                (item) => {
                  return <p className={styles.skill}>{item}</p>;
                }
              )}
            </div>
          </div>
          <img src="/fsjes.png" />
        </div>
      </div>
    </div>
  );
};

export default Experience;
