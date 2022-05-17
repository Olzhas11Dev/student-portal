import { Container } from "@mui/material";
import React from "react";
import Drawer from "../components/Drawer";

function TutorialsPage() {
  return (
    <div style={{ display: "flex" }}>
      <Drawer />
      <Container sx={{ mt: "60px" }}>I'm a Tutorials Page</Container>;
    </div>
  );
}

export default TutorialsPage;
