import React from "react";
import styles from "../styles/Home.module.css";
import Home from "./Home";

export default function HomePage({ children }) {
  return (
    <div className={styles.container}>
      <main className="flex-grow bg-orange-50 pb-5">{children || <Home />}</main>
    </div>
  );
}