import React from "react";
import { Box, Image, Video } from "@mantine/core";
import styles from "./BlackBox.module.css";

const MediaDisplay = ({ mediaFiles }) => {
  return (
    <Box className={styles.container}>
      {mediaFiles.length === 0 && (
        <Box
          className={styles.container}
          style={{
            backgroundColor: "black",
            color: "black",
            background: "black",
          }}
        />
      )}
      {mediaFiles.length > 0 && (
        <Box className={styles.grid}>
          {mediaFiles.map((file, index) => (
            <Box key={index} className={styles.item}>
              {file.type === "video" ? (
                <video src={file.src} controls className={styles.media} />
              ) : (
                <Image
                  src={file.src}
                  alt="Media"
                  fit="cover"
                  className={styles.media}
                />
              )}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default MediaDisplay;
