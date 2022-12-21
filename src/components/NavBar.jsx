import {
  AppBar,
  Divider,
  Drawer,
  IconButton,
  ListItem,
  ListItemButton,
  Toolbar,
  Typography,
  List,
  ListItemText,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import { Link } from "react-scroll";

const drawerWidth = 240;
const navItems = ["Inicio", "Información", "Tecnología", "Live", "Contacto"];

export const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        JRD
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, key) => (
          <ListItem key={key} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              {item === "Inicio" && (
                <Link
                  onClick={handleDrawerToggle}
                  color="#FFF"
                  to="background"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={800}
                  className="nav-item"
                >
                  {item}
                </Link>
              )}
              {item === "Información" && (
                <Link
                  onClick={handleDrawerToggle}
                  color="#FFF"
                  to="AboutUs"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={800}
                  className="nav-item"
                >
                  {item}
                </Link>
              )}
              {item === "Tecnología" && (
                <Link
                  onClick={handleDrawerToggle}
                  color="#FFF"
                  to="Skills"
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={800}
                  className="nav-item"
                >
                  {item}
                </Link>
              )}
              {item === "Live" && (
                <Link
                  onClick={handleDrawerToggle}
                  color="#FFF"
                  to="Apps"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={800}
                  className="nav-item"
                >
                  {item}
                </Link>
              )}
              {item === "Contacto" && (
                <Link
                  onClick={handleDrawerToggle}
                  color="#FFF"
                  to="ContactUS"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={800}
                  className="nav-item"
                >
                  {item}
                </Link>
              )}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            JRD
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <List sx={{ display: "flex" }}>
              {navItems.map((item, key) => (
                <ListItem key={key}>
                  {item === "Inicio" && (
                    <Link
                      color="#FFF"
                      to="background"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={800}
                      className="navItems"
                    >
                      {item}
                    </Link>
                  )}
                  {item === "Información" && (
                    <Link
                      color="#FFF"
                      to="AboutUs"
                      spy={true}
                      smooth={true}
                      offset={-80}
                      duration={800}
                      className="navItems"
                    >
                      {item}
                    </Link>
                  )}
                  {item === "Tecnología" && (
                    <Link
                      color="#FFF"
                      to="Skills"
                      spy={true}
                      smooth={true}
                      offset={-60}
                      duration={800}
                      className="navItems"
                    >
                      {item}
                    </Link>
                  )}
                  {item === "Live" && (
                    <Link
                      color="#FFF"
                      to="Apps"
                      spy={true}
                      smooth={true}
                      offset={-80}
                      duration={800}
                      className="navItems"
                    >
                      {item}
                    </Link>
                  )}
                  {item === "Contacto" && (
                    <Link
                      color="#FFF"
                      to="ContactUS"
                      spy={true}
                      smooth={true}
                      offset={-80}
                      duration={800}
                      className="navItems"
                    >
                      {item}
                    </Link>
                  )}
                </ListItem>
              ))}
            </List>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
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
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};
