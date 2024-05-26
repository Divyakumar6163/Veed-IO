"use client";
import { Box, Anchor, Text } from "@mantine/core";
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
import styles from "./Navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
function Sidebar() {
  return (
    <Box component="nav" className={styles.nav}>
      <Anchor href="/" className={styles.anchor}>
        <GiHamburgerMenu className={styles.icon} />
      </Anchor>
      <Anchor href="/search" className={styles.anchor}>
        <FaSearch className={styles.icon} />
        <Text className={styles.text}>Search</Text>
      </Anchor>
      <Anchor href="/settings" className={styles.anchor}>
        <FaCog className={styles.icon} />
        <Text className={styles.text}>Settings</Text>
      </Anchor>
      <Anchor href="/media" className={styles.anchor}>
        <FaPlus className={styles.icon} />
        <Text className={styles.text}>Media</Text>
      </Anchor>
      <Anchor href="/audio" className={styles.anchor}>
        <FaMusic className={styles.icon} />
        <Text className={styles.text}>Audio</Text>
      </Anchor>
      <Anchor href="/subtitles" className={styles.anchor}>
        <FaClosedCaptioning className={styles.icon} />
        <Text className={styles.text}>Subtitles</Text>
      </Anchor>
      <Anchor href="/text" className={styles.anchor}>
        <FaFont className={styles.icon} />
        <Text className={styles.text}>Text</Text>
      </Anchor>
      <Anchor href="/elements" className={styles.anchor}>
        <FaShapes className={styles.icon} />
        <Text className={styles.text}>Elements</Text>
      </Anchor>
      <Anchor href="/record" className={styles.anchor}>
        <FaVideo className={styles.icon} />
        <Text className={styles.text}>Record</Text>
      </Anchor>
      <Anchor href="/transitions" className={styles.anchor}>
        <FaFilm className={styles.icon} />
        <Text className={styles.text}>Transitions</Text>
      </Anchor>
      <Anchor href="/filters" className={styles.anchor}>
        <FaFilter className={styles.icon} />
        <Text className={styles.text}>Filters</Text>
      </Anchor>
      <Anchor href="/help" className={styles.anchor}>
        <FaQuestionCircle className={styles.icon} />
        <Text className={styles.text}>Help</Text>
      </Anchor>
    </Box>
  );
}

export default Sidebar;
