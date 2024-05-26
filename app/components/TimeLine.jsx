import React, { useState, useRef, useEffect } from "react";
import Draggable from "react-draggable";
import { ResizableBox } from "react-resizable";
import ReactPlayer from "react-player";
import {
  Box,
  Button,
  Group,
  Text,
  Container,
  Stack,
  Image,
} from "@mantine/core";
import {
  FaPlay,
  FaPause,
  FaDownload,
  FaSearchPlus,
  FaSearchMinus,
  FaCut,
  FaMicrophone,
  FaUpload,
  FaTrash,
  FaPlus,
} from "react-icons/fa";
import MediaDisplay from "./BlackBox";
import ModalAddFile from "./ModalFile";
import styles from "./TimeLine.module.css";

const TimelineEditor = () => {
  const [playing, setPlaying] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [mediaFiles, setMediaFiles] = useState([]);
  const [audioTracks, setAudioTracks] = useState([]);
  const [currentTime, setCurrentTime] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const playerRef = useRef(null);
  const timelineRef = useRef(null);

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  const handleZoomIn = () => {
    setZoom(zoom + 0.1);
  };

  const handleZoomOut = () => {
    setZoom(zoom - 0.1);
  };

  const handleFileUpload = (files) => {
    const newFiles = Array.from(files).map((file) => ({
      type: file.type.startsWith("video") ? "video" : "image",
      src: URL.createObjectURL(file),
    }));
    setMediaFiles((prevMediaFiles) => [...prevMediaFiles, ...newFiles]);
  };

  const handleRemoveFile = (index, type) => {
    if (type === "media") {
      setMediaFiles((prevMediaFiles) =>
        prevMediaFiles.filter((_, i) => i !== index)
      );
    } else if (type === "audio") {
      setAudioTracks((prevAudioTracks) =>
        prevAudioTracks.filter((_, i) => i !== index)
      );
    }
  };

  useEffect(() => {
    if (!playing && playerRef.current) {
      playerRef.current.seekTo(currentTime, "seconds");
    }
  }, [currentTime, playing]);

  return (
    <Container size="xl">
      <MediaDisplay mediaFiles={mediaFiles} />
      <Box className={styles.timelineEditor}>
        <Group className={styles.controls} spacing="xs">
          <Button onClick={handlePlayPause} className={styles.controlButton}>
            {playing ? <FaPause /> : <FaPlay />}
          </Button>
          <Button onClick={handleZoomIn} className={styles.controlButton}>
            <FaSearchPlus />
          </Button>
          <Button onClick={handleZoomOut} className={styles.controlButton}>
            <FaSearchMinus />
          </Button>
          <Button className={styles.controlButton}>
            <FaCut />
          </Button>
          <Button className={styles.controlButton}>
            <FaDownload />
          </Button>
          <Button className={styles.controlButton}>
            <FaMicrophone />
          </Button>
          <Button className={styles.controlButton}>
            <FaUpload />
          </Button>
          <Button
            className={styles.controlButton}
            onClick={() => setIsModalOpen(true)}
          >
            <FaPlus />
          </Button>
        </Group>
        {mediaFiles.length === 0 && audioTracks.length === 0 && (
          <Box className={styles.emptyTimeline}>
            <Button
              className={styles.addMediaButton}
              onClick={() => setIsModalOpen(true)}
            >
              Add media to this Project
            </Button>
          </Box>
        )}
        <Box
          className={styles.timelineContainer}
          style={{ transform: `scale(${zoom})` }}
          ref={timelineRef}
        >
          {mediaFiles.map((file, index) => (
            <Box key={index} className={styles.track}>
              <Draggable axis="x">
                <ResizableBox
                  width={200}
                  height={40}
                  minConstraints={[100, 40]}
                  maxConstraints={[400, 40]}
                >
                  <Box className={styles.trackItem}>
                    {file.type === "video" ? (
                      <video
                        src={file.src}
                        controls
                        width="100%"
                        height="100%"
                      />
                    ) : (
                      <Image
                        src={file.src}
                        alt="Media"
                        width="100%"
                        height="100%"
                      />
                    )}
                    <Button
                      className={styles.removeButton}
                      onClick={() => handleRemoveFile(index, "media")}
                    >
                      <FaTrash />
                    </Button>
                  </Box>
                </ResizableBox>
              </Draggable>
            </Box>
          ))}
          {audioTracks.map((track, index) => (
            <Box key={index} className={styles.track}>
              <Draggable axis="x">
                <ResizableBox
                  width={200}
                  height={40}
                  minConstraints={[100, 40]}
                  maxConstraints={[400, 40]}
                >
                  <Box className={styles.trackItem}>
                    <Text>Audio Track</Text>
                    <Button
                      className={styles.removeButton}
                      onClick={() => handleRemoveFile(index, "audio")}
                    >
                      <FaTrash />
                    </Button>
                  </Box>
                </ResizableBox>
              </Draggable>
            </Box>
          ))}
          <Box
            className={styles.playingLine}
            style={{
              left: `${
                (currentTime / (playerRef.current?.getDuration() || 1)) * 100
              }%`,
            }}
          />
        </Box>
        {mediaFiles.length > 0 && (
          <ReactPlayer
            ref={playerRef}
            url={mediaFiles[0].src}
            playing={playing}
            onProgress={({ playedSeconds }) => setCurrentTime(playedSeconds)}
            width="0"
            height="0"
          />
        )}
        <ModalAddFile
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onFileUpload={handleFileUpload}
        />
      </Box>
    </Container>
  );
};

export default TimelineEditor;
