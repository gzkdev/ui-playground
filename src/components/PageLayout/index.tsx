import React from "react";
import styles from "./PageLayout.module.css";
import DemosGrid from "../DemosGrid";

const PageLayout = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.heading}>React Playground</h1>
        <DemosGrid />
      </div>
    </main>
  );
};

export default PageLayout;
