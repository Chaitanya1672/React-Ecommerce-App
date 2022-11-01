import React from "react";
import styles from "./navbar.module.css";
import SearchIcon from "@mui/icons-material/Search";

function Navbar() {
  return (
    <nav className={styles.navBar}>
      <div className={styles.links}>
        <div className={styles.linkOne}>
          <div className={styles.linkOneText}>En</div>
          <div className={styles.searchInput}>
            <input className={styles.inp} type="text" />
            <SearchIcon className="" style={{ fontSize: "16px" }} />
          </div>
        </div>
        <div>2</div>
        <div>3</div>
      </div>
    </nav>
  );
}

export default Navbar;
