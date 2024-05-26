"use client";
import React from "react";
import { MantineProvider } from "@mantine/core";
import Sidebar from "./components/Sidebar"; // Ensure the path is correct
import Timeline from "./components/TimeLine";
// import Model from "./components/ModalFile";
import BlackBox from "./components/BlackBox";
const App = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Sidebar />
      {/* <Model /> */}
      {/* <BlackBox /> */}
      <Timeline />
    </MantineProvider>
  );
};

export default App;
