import React from "react";
import styles from "../styles/Home.module.css";
import Home from "./Home";

export default function HomePage({ children }) {
  return (
    <div className={styles.container}>
      <main className="flex-grow">{children || <Home />}</main>
    </div>
  );
}