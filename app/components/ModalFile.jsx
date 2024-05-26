import React from "react";
import img1 from ".././public/img1.png";
import img2 from ".././public/img2.png";
import {
  Modal,
  Button,
  Group,
  FileButton,
  Stack,
  Image,
  Text,
  useMantineTheme,
} from "@mantine/core";

const ModalAddFile = ({ isOpen, onClose, onFileUpload }) => {
  const theme = useMantineTheme();

  const handleFileChange = (files) => {
    onFileUpload(files);
    onClose();
  };

  return (
    <Modal
      opened={isOpen}
      onClose={onClose}
      title="Let's make a video!"
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
    >
      <Stack>
        <FileButton onChange={handleFileChange} multiple>
          {(props) => (
            <Button {...props} fullWidth>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ marginRight: 8 }}>⬆</span>
                <span>Upload files</span>
              </div>
            </Button>
          )}
        </FileButton>
        <Text align="center">Choose files or drag them here</Text>
        <Group position="center">
          <Stack align="center">
            <Image src={img2} alt="Start by recording" height={80} />
            <Text>Start by recording</Text>
          </Stack>
          <Stack align="center">
            <Image src={img1} alt="Start with AI" height={80} />
            <Text>Start with AI</Text>
          </Stack>
        </Group>
      </Stack>
    </Modal>
  );
};

export default ModalAddFile;
