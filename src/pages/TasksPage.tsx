import React from "react";
import { Container } from "@mui/material";
import Drawer from "../components/Drawer";

function TasksPage() {
  return (
    <div style={{ display: "flex" }}>
      <Drawer />
      <Container sx={{ mt: "60px" }}>I'm a Tasks Page</Container>
    </div>
  );
}

export default TasksPage;
