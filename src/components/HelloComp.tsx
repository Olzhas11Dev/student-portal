import { Box } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";

export const HelloStyled = styled(Box)({
  backgroundColor: "#EEF1FA",
  padding: "4px",
  paddingLeft: "30px",
  display: "inline-block",
  borderRadius: "14px",
  color: "#8A8585",
  fontWeight: "bold",
  width: "300px",
});

interface PropHello {
  name: string;
}

const HelloComp: React.FC<PropHello> = ({ name }) => {
  return <HelloStyled>How are you today, {name}?</HelloStyled>;
};

export default HelloComp;
