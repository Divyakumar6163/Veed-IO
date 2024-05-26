import React, { useState, useRef, useEffect } from "react";
import Draggable from "react-draggable";
import { ResizableBox } from "react-resizable";
import ReactPlayer from "react-player";
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
} from "react-icons/fa";
import styles from "./TimeLine.module.css";

const TimelineEditor = () => {
  const [playing, setPlaying] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [mediaFiles, setMediaFiles] = useState([]);
  const [audioTracks, setAudioTracks] = useState([]);
  const [currentTime, setCurrentTime] = useState(0);
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

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setMediaFiles([
      ...mediaFiles,
      { type: "video", src: URL.createObjectURL(file) },
    ]);
  };

  const handleAudioUpload = (e) => {
    const file = e.target.files[0];
    setAudioTracks([...audioTracks, { src: URL.createObjectURL(file) }]);
  };

  const handleRemoveFile = (index, type) => {
    if (type === "media") {
      setMediaFiles(mediaFiles.filter((_, i) => i !== index));
    } else if (type === "audio") {
      setAudioTracks(audioTracks.filter((_, i) => i !== index));
    }
  };

  useEffect(() => {
    if (!playing && playerRef.current) {
      playerRef.current.seekTo(currentTime, "seconds");
    }
  }, [currentTime, playing]);

  return (
    <div className={styles.timelineEditor}>
      <div className={styles.controls}>
        <button onClick={handlePlayPause} className={styles.controlButton}>
          {playing ? <FaPause /> : <FaPlay />}
        </button>
        <button onClick={handleZoomIn} className={styles.controlButton}>
          <FaSearchPlus />
        </button>
        <button onClick={handleZoomOut} className={styles.controlButton}>
          <FaSearchMinus />
        </button>
        <button className={styles.controlButton}>
          <FaCut />
        </button>
        <button className={styles.controlButton}>
          <FaDownload />
        </button>
        <button className={styles.controlButton}>
          <FaMicrophone />
        </button>
        <label className={styles.uploadLabel}>
          <FaUpload />
          <input
            type="file"
            onChange={handleFileUpload}
            className={styles.uploadInput}
          />
        </label>
        <label className={styles.uploadLabel}>
          <FaUpload />
          <input
            type="file"
            onChange={handleAudioUpload}
            className={styles.uploadInput}
          />
        </label>
      </div>
      {mediaFiles.length === 0 && audioTracks.length === 0 && (
        <div className={styles.emptyTimeline}>
          <button
            className={styles.addMediaButton}
            onClick={() => document.getElementById("fileInputUnique").click()}
          >
            Add media to this Project
          </button>
          <input
            id="fileInputUnique"
            type="file"
            onChange={handleFileUpload}
            className={styles.uploadInput}
            style={{ display: "none" }}
          />
        </div>
      )}
      <div
        className={styles.timelineContainer}
        style={{ transform: `scale(${zoom})` }}
        ref={timelineRef}
      >
        {mediaFiles.map((file, index) => (
          <div key={index} className={styles.track}>
            <Draggable axis="x">
              <ResizableBox
                width={200}
                height={40}
                minConstraints={[100, 40]}
                maxConstraints={[400, 40]}
              >
                <div
                  className={styles.trackItem}
                  style={{ backgroundColor: "red" }}
                >
                  <span>{file.type === "video" ? "Video" : "Image"} Track</span>
                  <button
                    className={styles.removeButton}
                    onClick={() => handleRemoveFile(index, "media")}
                  >
                    <FaTrash />
                  </button>
                </div>
              </ResizableBox>
            </Draggable>
          </div>
        ))}
        {audioTracks.map((track, index) => (
          <div key={index} className={styles.track}>
            <Draggable axis="x">
              <ResizableBox
                width={200}
                height={40}
                minConstraints={[100, 40]}
                maxConstraints={[400, 40]}
              >
                <div
                  className={styles.trackItem}
                  style={{ backgroundColor: "blue" }}
                >
                  <span>Audio Track</span>
                  <button
                    className={styles.removeButton}
                    onClick={() => handleRemoveFile(index, "audio")}
                  >
                    <FaTrash />
                  </button>
                </div>
              </ResizableBox>
            </Draggable>
          </div>
        ))}
        <div
          className={styles.playingLine}
          style={{
            left: `${(currentTime / playerRef.current?.getDuration()) * 100}%`,
          }}
        />
      </div>
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
    </div>
  );
};

export default TimelineEditor;
