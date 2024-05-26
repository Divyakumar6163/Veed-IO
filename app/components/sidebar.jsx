"use client";
import Link from "next/link";
import {
  FaSearch,
  FaCog,
  FaPlus,
  FaMusic,
  FaClosedCaptioning,
  FaFont,
  FaShapes,
  FaVideo,
  FaQuestionCircle,
  FaFilm,
  FaFilter,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.iconContainer}>
        <GiHamburgerMenu className={styles.icon} />
      </div>
      <Link href="/search">
        <div className={styles.iconContainer}>
          <FaSearch className={styles.icon} />
          <span>Search</span>
        </div>
      </Link>
      <Link href="/settings">
        <div className={styles.iconContainer}>
          <FaCog className={styles.icon} />
          <span>Settings</span>
        </div>
      </Link>
      <Link href="/media">
        <div className={styles.iconContainer}>
          <FaPlus className={styles.icon} />
          <span>Media</span>
        </div>
      </Link>
      <Link href="/audio">
        <div className={`${styles.iconContainer} ${styles.active}`}>
          <FaMusic className={styles.icon} />
          <span>Audio</span>
        </div>
      </Link>
      <Link href="/subtitles">
        <div className={styles.iconContainer}>
          <FaClosedCaptioning className={styles.icon} />
          <span>Subtitles</span>
        </div>
      </Link>
      <Link href="/text">
        <div className={styles.iconContainer}>
          <FaFont className={styles.icon} />
          <span>Text</span>
        </div>
      </Link>
      <Link href="/elements">
        <div className={styles.iconContainer}>
          <FaShapes className={styles.icon} />
          <span>Elements</span>
        </div>
      </Link>
      <Link href="/record">
        <div className={styles.iconContainer}>
          <FaVideo className={styles.icon} />
          <span>Record</span>
        </div>
      </Link>
      <Link href="/transitions">
        <div className={styles.iconContainer}>
          <FaFilm className={styles.icon} />
          <span>Transitions</span>
        </div>
      </Link>
      <Link href="/filters">
        <div className={styles.iconContainer}>
          <FaFilter className={styles.icon} />
          <span>Filters</span>
        </div>
      </Link>
      <Link href="/help">
        <div className={styles.iconContainer}>
          <FaQuestionCircle className={styles.icon} />
          <span>Help</span>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
