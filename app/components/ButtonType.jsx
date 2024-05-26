"use client";
import { useRef, useEffect } from "react";
import { Button, Group, Box } from "@mantine/core";
import { FaMagic, FaImages, FaVideo, FaLandscape } from "react-icons/fa";
import styles from "./ButtonType.module.css";

const FileButtons = ({ fileType }) => {
  const buttons = {
    video: [
      { name: "Magic Tools", icon: <FaMagic /> },
      { name: "Animation", icon: <FaImages /> },
      { name: "Transition", icon: <FaLandscape /> },
    ],
    image: [
      { name: "Animation", icon: <FaImages /> },
      { name: "Adjust", icon: <FaVideo /> },
    ],
    none: [
      { name: "Background", icon: <FaMagic /> },
      { name: "Landscape", icon: <FaLandscape /> },
    ],
  };

  const selectedButtons = buttons[fileType] || buttons.none;
  const timelineRef = useRef(null);

  // Add useEffect to ensure timelineRef is set before accessing it
  useEffect(() => {
    if (timelineRef.current) {
      // Add any initialization code here
    }
  }, [timelineRef]);

  return (
    <Box className={styles.container}>
      <Box className={styles.buttons}>
        <Group className={styles.group}>
          {selectedButtons.map((button, index) => (
            <Button key={index} leftIcon={button.icon}>
              {button.name}
            </Button>
          ))}
        </Group>
      </Box>
    </Box>
  );
};

export default FileButtons;
