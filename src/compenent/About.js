import React from "react";
import CustomHeading from "./CustomHeading";

const About = () => {
  return (
    <div
      id="about"
      style={{ padding: "40px 30px", minHeight: "100vh", width: "100%" }}
    >
      <CustomHeading title="About Me" subTitle="Get to know me" />
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <div style={{ width: "50%" }}>
          <p
            style={{
              padding: "0 50px",
              lineHeight: "1.7",
              fontSize: "19px",
              textAlign: "justify",
            }}
          >
            I'm web developer, I have gained expertise in working with a variety
            of technologies such as ReactS, NextS, WordPress, ExpressJS, and
            MongoDB. I have hands-on experience in scalable web applications
            using these technologies. Additionally, I have knowledge of project
            management methodologies like Agile and tools like Jira and Gantt,
            which have helped me deliver projects on time and with quality.
          </p>
        </div>
        <img
          style={{
            width: "450px",
            height: "450px",
            borderRadius: "30% 70% 70% 30% / 37% 30% 70% 63% ",
            border: "4px solid #FF6666",
            boxShadow: "#FF6666 0px 13px 27px -5px, #FF6666 0px 8px 16px -8px"
          }}
          src="/hh.png"
          // className="w-100 p-2 bd-highlight"
          alt="hh.png "
        ></img>
      </div>
    </div>
  );
};

export default About;
