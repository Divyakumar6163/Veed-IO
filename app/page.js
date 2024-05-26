"use client";
import styles from "./page.module.css";
import TimeLine from "./components/TimeLine";
import Sidebar from "./components/sidebar";
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.div}>
        <Sidebar
          className={styles.sideBar}
          style={{ position: "absolute", top: "0px", left: " 0px" }}
        />
      </div>
      <footer className={styles.footer}>
        <TimeLine />
      </footer>
    </main>
  );
}
