import { Container } from "@mui/material";
import React from "react";
import Drawer from "../components/Drawer";

function ResultPage() {
  return (
    <div style={{ display: "flex" }}>
      <Drawer />
      <Container sx={{ mt: "60px" }}>I'm a Result Page</Container>;
    </div>
  );
}

export default ResultPage;
