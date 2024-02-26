import React from "react";
import CustomHeading from "../CustomHeading";
import styles from "./Contact.module.css";


export default function Contact() {
    return (
        <div
            id="contact"
            style={{
                padding: "40px 30px",
                minHeight: "100vh",
                width: "100%",
                backgroundColor: "#F1EEF",
            }}
        >
            <CustomHeading
                title="contact"
                subTitle={"My contact"}
            />

            <div
                style={{
                    display: "flex",
                    gap: "15px",
                    flexDirection: "column",
                    marginTop: "40px",
                }}
            >
                <div className={styles.ContactContainer}>
                    <div>
                        <div className={styles.infoContainer}>
                            <h1>Email</h1>
                            <p>hamzaafrouss@gmail.com</p>
                            <h1>Linkden</h1>
                            <p>HamzaAfrouss</p>
                            <h1>Phone</h1>
                            <p>+212697597258</p>
                            <h1>GitHub</h1>
                            <p>hamzaafrouss</p>
                        </div>
                    </div>

                </div>

                <div className={styles.ContactContainer}>
                    <div>
                        <div className={styles.infoContainer}>

                        </div>




                    </div>

                </div>
            </div>
        </div>
    )
}

