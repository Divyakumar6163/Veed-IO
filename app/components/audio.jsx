import { useState } from "react";
import { Box, Button, Group, Text, Title, Image } from "@mantine/core";
import { FaUpload, FaMicrophone, FaClipboardList } from "react-icons/fa";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { MdGraphicEq } from "react-icons/md";
import styles from "./audio.module.css";
import ModalAddFile from "./ModalFile";

function AddMedia({ onFileUpload }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleFileUpload = (file) => {
    onFileUpload(file); // Pass the uploaded file to the parent component
    setIsModalOpen(false); // Close the modal after uploading
  };

  return (
    <Box className={styles.container}>
      <Title order={2} className={styles.title}>
        Add Media
      </Title>
      <Box className={styles.uploadBox} onClick={handleOpenModal}>
        <FaUpload className={styles.uploadIcon} />
        <Text>Upload a File</Text>
        <Text size="xs" color="dimmed">
          Drag & drop a file or import from a link
        </Text>
      </Box>
      <Group className={styles.buttonGroup}>
        <Button className={styles.button} leftIcon={<FaMicrophone />}>
          Record
        </Button>
        <Button className={styles.button} leftIcon={<FaClipboardList />}>
          Brand Kit
        </Button>
        <Button className={styles.button} leftIcon={<HiOutlineSpeakerphone />}>
          Text To Speech
        </Button>
        <Button className={styles.button} leftIcon={<MdGraphicEq />}>
          Voice Clone <span className={styles.new}>NEW</span>
        </Button>
      </Group>
      <Group className={styles.avatarsHeader}>
        <Title order={4}>AI Avatars</Title>
        <Text size="sm" className={styles.viewAll}>
          View All
        </Text>
      </Group>
      <Group className={styles.avatars}>
        <Image src="avatar1.jpg" alt="Avatar 1" className={styles.avatar} />
        <Image src="avatar2.jpg" alt="Avatar 2" className={styles.avatar} />
        <Image src="avatar3.jpg" alt="Avatar 3" className={styles.avatar} />
        <Image src="avatar4.jpg" alt="Avatar 4" className={styles.avatar} />
      </Group>
      <ModalAddFile
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onFileUpload={handleFileUpload}
      />
    </Box>
  );
}

export default AddMedia;
