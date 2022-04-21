import React from "react";
import Avatar from "@mui/material/Avatar";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { ListItem, ListItemText } from "@mui/material";

function NameInfo() {
  return (
    <ListItem
      sx={{
        marginBottom: "50px",
        marginTop: "30px",
        backgroundColor: "#303D9E",
        width: "80%",
        ml: 2,
        borderRadius: "8px",
      }}>
      <ListItemAvatar>
        <Avatar sx={{ backgroundColor: "#FF5467" }}>K</Avatar>
      </ListItemAvatar>
      <ListItemText primary="Kamil Kamilovich" />
    </ListItem>
  );
}

export default NameInfo;
