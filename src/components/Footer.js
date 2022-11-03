import React from "react";
import styles from "./footer.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import PlaceIcon from "@mui/icons-material/Place";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

function Footer() {
  return (
    <div className={styles.footerDiv}>
      <div className={styles.leftDiv}>
        <h2 className="text-[25px]">I am Chaitanya</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius{" "}
        </p>
        <div className={styles.socialMedia}>
          <span className={`bg-blue-700 ${styles.smIcon}`}>
            <FacebookIcon />
          </span>
          <span className={`bg-orange-400 ${styles.smIcon}`}>
            <InstagramIcon />
          </span>
          <span className={`bg-sky-400 ${styles.smIcon}`}>
            <TwitterIcon />
          </span>
          <span className={`bg-red-700 ${styles.smIcon}`}>
            <PinterestIcon />
          </span>
        </div>
      </div>
      <div className={styles.rightDiv}>
        <div className={styles.contactIcon}>
          <PlaceIcon />
          <p className="pl-3">State of California</p>
        </div>

        <div className={styles.contactIcon}>
          <LocalPhoneIcon />
          <p className="pl-3">+91 123456789</p>
        </div>
        <div className={styles.contactIcon}>
          <EmailIcon />
          <p className="pl-3">testmail@test.com</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
