import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./announce.module.css";
import { display, style } from "@mui/system";

function Announce() {
  const [announce, setAnnounce] = useState(true);
  const announceHandler = () => {
    setAnnounce(false);
  };
  return (
    <header className={announce ? styles.header : "hidden"}>
      <h2 className="mr-2">Hurry Up It is 40% off</h2>
      <CloseIcon className={styles.closeIcon} onClick={announceHandler} />
    </header>
  );
}

export default Announce;
