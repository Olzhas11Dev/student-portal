import React from "react";
import { Box, Button, Container, Divider, TextField, Typography } from "@mui/material";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import { styled } from "@mui/system";

export const IconStyled = styled(Box)({
  padding: "10px",
  width: "40px",
  height: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#4558E6",
  borderRadius: 40,
  color: "white",
  margin: "auto",
});

function SignUp() {
  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          width: {
            xs: "90%",
            sm: "80%",
            md: "60%",
            lg: "40%",
          },
          marginTop: "10%",
        }}>
        <IconStyled>
          <VpnKeyIcon />
        </IconStyled>
        <Typography sx={{ marginBottom: "30px", fontSize: "24px", textAlign: "center" }}>
          Sign Up
        </Typography>
        <Box mb={3}>
          <TextField fullWidth label="Email address" color="primary" />
        </Box>
        <Box sx={{ marginBottom: "40px" }}>
          <TextField fullWidth label="Password" color="primary" />
        </Box>

        <Button sx={{ height: "50px" }} fullWidth variant="contained">
          Sign Up
        </Button>
      </Box>
    </Container>
  );
}

export default SignUp;
