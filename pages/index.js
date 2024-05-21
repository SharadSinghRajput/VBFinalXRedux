import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home({ children }) {
  return (
    <div className={styles.container}>
      <main className="flex-grow">{children}</main>
      <p>dfx</p>
    </div>
  );
}