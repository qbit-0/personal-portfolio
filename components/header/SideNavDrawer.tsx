import {
  Drawer,
  DrawerProps,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { FC } from "react";
import { PAGES } from "../../pages";

const SideNavDrawer: FC<DrawerProps> = (props) => {
  return (
    <Drawer {...props}>
      <List>
        {PAGES.map((page) => (
          <ListItem key={page}>
            <ListItemButton
              onClick={() => {
                location.href = `#${page}`;
                if (props.onClose) {
                  props.onClose({}, "backdropClick");
                }
              }}
            >
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
