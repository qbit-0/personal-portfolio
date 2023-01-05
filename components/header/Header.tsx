import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { Menu } from "@mui/icons-material";
import SideNavDrawer from "./SideNavDrawer";
import { PAGES } from "../../pages";

type Props = {};

const Header = (props: Props) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <Box component="header">
      <AppBar position="fixed">
        <Toolbar>
          <Box
            display={["block", "block", "none"]}
            component={IconButton}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            mr={2}
            onClick={() => {
              setIsDrawerOpen(true);
            }}
          >
            <Menu />
          </Box>
          <Typography
            display={["none", "none", "block"]}
            variant="h6"
            flexGrow={1}
          >
            Duy Pham
          </Typography>
          <Stack
            display={["none", "none", "block"]}
            direction="row"
            spacing={2}
          >
            {PAGES.map((page) => (
              <Box component="a" href={`#${page}`} color="inherit">
                <Button key={page} color="inherit">
                  {page}
                </Button>
              </Box>
            ))}
          </Stack>
        </Toolbar>
      </AppBar>
      <SideNavDrawer
        open={isDrawerOpen}
        onClose={() => {
          setIsDrawerOpen(false);
        }}
      />
    </Box>
  );
};

export default Header;
