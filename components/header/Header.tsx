import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { Menu } from "@mui/icons-material";
import SideNavDrawer from "./SideNavDrawer";

const PAGES = [
  "welcome",
  "about",
  "projects",
  "skills",
  "competitions",
  "contact",
];

type Props = {};

const Header = (props: Props) => {
  return (
    <Box component="header">
      <AppBar position="fixed">
        <Toolbar>
          <Box
            component={IconButton}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            mr={2}
          >
            <Menu />
          </Box>
          <Typography variant="h6" flexGrow={1}>
            Duy Pham
          </Typography>
          <Stack direction="row" spacing={2}>
            {PAGES.map((page) => (
              <Button color="inherit">{page}</Button>
            ))}
          </Stack>
        </Toolbar>
      </AppBar>
      <SideNavDrawer />
    </Box>
  );
};

export default Header;
