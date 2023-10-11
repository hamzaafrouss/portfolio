import React from "react";
import CustomHeading from "../CustomHeading";
import styles from "./Work.module.css"

const Work = () => {
  return (
    <div
      id = "work"
      style={{
        padding: "40px 30px",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <CustomHeading title="My Work" subTitle={"Brief of what i do"} />
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          gap : "40px",
          alignItems: "center",
          flexDirection: "row",
          marginTop: "40px",
          flexWrap : "wrap"
        }}
      >
        <div className={styles.card}>
          <img
            src="/testImage.png"
            style={{  }}
          />
          <div style={{ padding: "10px" }}>
            <p
              style={{
                fontSize: "22px",
                lineHeight: "1",
                margin: "0 0 5px 0",
                fontWeight: "700",
              }}
            >
              Dento
            </p>
            <p
              style={{
                fontSize: "17px",
                margin: "0",
                lineHeight: "1",
                color: "#7D7C7C",
              }}
            >
              Web development
            </p>

            <p style={{ lineHeight: "1.6", fontSize: "16px", marginTop : "15px" }}>
              Dento is a dental care website template, a near-complete solution
              to get your clinic online as fast as possible. Dento contains 7
              diferent pages for services, pricing, contact, and also a blogs
              page and a page to read the blog.
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <img
            src="/testImage.png"
            style={{  }}
          />
          <div style={{ padding: "10px" }}>
            <p
              style={{
                fontSize: "22px",
                lineHeight: "1",
                margin: "0 0 5px 0",
                fontWeight: "700",
              }}
            >
              Dento
            </p>
            <p
              style={{
                fontSize: "17px",
                margin: "0",
                lineHeight: "1",
                color: "#7D7C7C",
              }}
            >
              Web development
            </p>

            <p style={{ lineHeight: "1.6", fontSize: "16px", marginTop : "15px" }}>
              Dento is a dental care website template, a near-complete solution
              to get your clinic online as fast as possible. Dento contains 7
              diferent pages for services, pricing, contact, and also a blogs
              page and a page to read the blog.
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <img
            src="/testImage.png"
            style={{  }}
          />
          <div style={{ padding: "10px" }}>
            <p
              style={{
                fontSize: "22px",
                lineHeight: "1",
                margin: "0 0 5px 0",
                fontWeight: "700",
              }}
            >
              Dento
            </p>
            <p
              style={{
                fontSize: "17px",
                margin: "0",
                lineHeight: "1",
                color: "#7D7C7C",
              }}
            >
              Web development
            </p>

            <p style={{ lineHeight: "1.6", fontSize: "16px", marginTop : "15px" }}>
              Dento is a dental care website template, a near-complete solution
              to get your clinic online as fast as possible. Dento contains 7
              diferent pages for services, pricing, contact, and also a blogs
              page and a page to read the blog.
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <img
            src="/testImage.png"
            style={{  }}
          />
          <div style={{ padding: "10px" }}>
            <p
              style={{
                fontSize: "22px",
                lineHeight: "1",
                margin: "0 0 5px 0",
                fontWeight: "700",
              }}
            >
              Dento
            </p>
            <p
              style={{
                fontSize: "17px",
                margin: "0",
                lineHeight: "1",
                color: "#7D7C7C",
              }}
            >
              Web development
            </p>

            <p style={{ lineHeight: "1.6", fontSize: "16px", marginTop : "15px" }}>
              Dento is a dental care website template, a near-complete solution
              to get your clinic online as fast as possible. Dento contains 7
              diferent pages for services, pricing, contact, and also a blogs
              page and a page to read the blog.
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <img
            src="/testImage.png"
            style={{  }}
          />
          <div style={{ padding: "10px" }}>
            <p
              style={{
                fontSize: "22px",
                lineHeight: "1",
                margin: "0 0 5px 0",
                fontWeight: "700",
              }}
            >
              Dento
            </p>
            <p
              style={{
                fontSize: "17px",
                margin: "0",
                lineHeight: "1",
                color: "#7D7C7C",
              }}
            >
              Web development
            </p>

            <p style={{ lineHeight: "1.6", fontSize: "16px", marginTop : "15px" }}>
              Dento is a dental care website template, a near-complete solution
              to get your clinic online as fast as possible. Dento contains 7
              diferent pages for services, pricing, contact, and also a blogs
              page and a page to read the blog.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
