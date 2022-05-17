import { Box, Button, Container, Divider, TextField, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { constants } from "../constants";
import Axios from "axios";

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(false);

  const register = () => {
    const object = { email, password };
    if (!email || !password) {
      alert("error");
      setError(true);
    } else {
      if (object) {
        Axios.post(`${constants.backend}/auth/login`, object).then((res) => {
          console.log(res.data);
        });
      }
      setPassword("");
      setEmail("");
    }
  };

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
        <Typography sx={{ marginBottom: "30px", fontSize: "24px", textAlign: "center" }}>
          Sign In
        </Typography>
        <Box mb={3}>
          <TextField
            fullWidth
            label="Email address"
            color="primary"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </Box>
        <Box sx={{ marginBottom: "40px" }}>
          <TextField
            fullWidth
            label="Password"
            color="primary"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </Box>
        <Button onClick={register} sx={{ height: "50px" }} fullWidth variant="contained">
          Sign In
        </Button>
        <Typography sx={{ textAlign: "center", marginTop: "20px" }}>
          Forgot your Email or Password?
        </Typography>
        <Divider sx={{ mt: 2, mb: 4 }} />
        <Button
          onClick={() => navigate("/signup")}
          sx={{ height: "50px" }}
          fullWidth
          variant="outlined">
          Sign Up
        </Button>
      </Box>
    </Container>
  );
}

export default SignIn;
