import { Container } from "@mui/material";
import React from "react";
import CalendarSection from "../components/CalendarSection";
import Drawer from "../components/Drawer";
import HelloComp from "../components/HelloComp";
import ProfileDetail from "../components/ProfileDetail";

function Home() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Drawer />
      <Container sx={{ mt: "100px" }}>
        <HelloComp name="Olzhas" />
        <ProfileDetail firstName="Olzhas" result1={45} result2={60} result3={80} />
      </Container>
      <CalendarSection />
    </div>
  );
}

export default Home;
