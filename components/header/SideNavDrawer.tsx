import {
  Drawer,
  DrawerProps,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React, { FC } from "react";
import { PAGES } from "../../pages";

type Props = DrawerProps;

const SideNavDrawer: FC<DrawerProps> = (props) => {
  return (
    <Drawer {...props}>
      <List>
        {PAGES.map((page) => (
          <ListItem key={page}>
            <ListItemButton>
              <ListItemText
                primary={page}
                sx={{ textTransform: "uppercase" }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SideNavDrawer;
