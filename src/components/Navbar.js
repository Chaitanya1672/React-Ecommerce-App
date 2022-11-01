import React from "react";
import styles from "./navbar.module.css";
import SearchIcon from "@mui/icons-material/Search";
import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Navbar() {
  return (
    <nav className={styles.navBar}>
      <div className={styles.links}>
        <div className={styles.linkOne}>
          <div className={styles.linkOneText}>En</div>
          <div className={styles.searchInput}>
            <input className={styles.inp} type="text" />
            <SearchIcon
              className="cursor-pointer"
              style={{ fontSize: "16px" }}
            />
          </div>
        </div>
        <div className={styles.link2CenterDiv}>
          <div className="logo font-bold text-lg">Summer Kings</div>
        </div>
        <div className={styles.link2EndDiv}>
          <div className={styles.endDivtxt}>Register</div>
          <div className={styles.endDivtxt}>Sign In</div>
          <Badge badgeContent={2} color="primary" className={styles.endDivtxt}>
            <ShoppingCartIcon />
          </Badge>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
