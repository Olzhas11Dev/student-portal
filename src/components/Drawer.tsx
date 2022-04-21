import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import AssignmentLateOutlinedIcon from "@mui/icons-material/AssignmentLateOutlined";
import NameInfo from "./NameInfo";
import { useNavigate, useLocation } from "react-router-dom";

interface Ibuttons {
  id: number;
  title: string;
}

const drawerWidth = 260;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [choosedBtn, setChoosedBtn] = React.useState("");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    let path = location.pathname.replace("/", "");
    if (path) {
      setChoosedBtn(path);
    } else {
      setChoosedBtn("home");
    }
    console.log(path);
  }, [location]);

  const drawerContext = [
    { id: 1, title: "Home", icon: <HomeOutlinedIcon /> },
    { id: 2, title: "Results", icon: <SchoolOutlinedIcon /> },
    { id: 3, title: "Tutorials", icon: <AssignmentIndOutlinedIcon /> },
    { id: 4, title: "Tasks", icon: <AssignmentLateOutlinedIcon /> },
  ];

  const goToPage = (item: Ibuttons) => {
    setChoosedBtn(item.title.toLowerCase());
    if (item.title.toLowerCase() !== "home") {
      navigate(`${item.title.toLowerCase()}`);
    } else {
      navigate("/");
    }
  };

  const drawer = (
    <div style={{ backgroundColor: "#4558E6", color: "white", marginTop: "40px" }}>
      <Box sx={{ marginLeft: "20px" }}>LOGO</Box>
      <NameInfo />
      <List>
        {drawerContext.map((item) => (
          <ListItem onClick={() => goToPage(item)} button key={item.id} sx={{ height: "70px" }}>
            <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>

            <ListItemText
              style={{
                color: `${item.title.toLowerCase()}` === choosedBtn ? "#00E5FF" : "",
              }}>
              {item.title}
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}>
        <Toolbar
          //// can see responsive toolbar only for xs
          sx={{
            display: {
              sm: "none",
              md: "none",
              lg: "none",
            },
          }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}>
            <MenuIcon />
          </IconButton>
          <Box
            onClick={() => navigate("/")}
            sx={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              cursor: "pointer",
            }}>
            LOGO
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#4558E6",
            },
          }}>
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#4558E6",
            },
          }}
          open>
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

/* <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
        <Toolbar />
      </Box> */
