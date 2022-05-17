import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

const ProfileStyled = styled(Box)({
  border: "6px solid #EFEDF8",
  marginTop: "20px",
  height: "400px",
  borderRadius: "40px",
});

interface ProfileProps {
  firstName: string;
  result1: number;
  result2: number;
  result3: number;
}

const ProfileDetail: React.FC<ProfileProps> = ({ firstName, result1, result2, result3 }) => {
  return (
    <ProfileStyled>
      {/* LeftBar */}
      <Box>
        <Typography sx={{ fontWeight: "bold", color: "#2C4546" }} variant="h3">
          Profile Detail
        </Typography>
      </Box>
      {/* RightBar */}
      <Box></Box>
    </ProfileStyled>
  );
};

export default ProfileDetail;
