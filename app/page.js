"use client";
import React from "react";
import { MantineProvider } from "@mantine/core";
import Sidebar from "./components/Navbar";
import Timeline from "./components/TimeLine";
const App = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Sidebar />
      <Timeline />
    </MantineProvider>
  );
};

export default App;
