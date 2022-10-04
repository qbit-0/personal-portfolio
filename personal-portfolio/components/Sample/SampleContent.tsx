import { Bookmark, Forum, Home, Menu, Person } from "@mui/icons-material";
import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  IconButton,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import { FC, useContext, useMemo, useState } from "react";
import { SampleContext } from "../../utility/context/SampleProvider";
import SampleHome from "./SampleHome";
import SamplePosts from "./SamplePosts";
import SampleProfile from "./SampleProfile";
import SampleSaved from "./SampleSaved";

const ACCOUNT_ID = 0;

type Props = {};

const SampleContent: FC<Props> = ({}) => {
  const { getAccount } = useContext(SampleContext);
  const [tab, setTab] = useState("profile");

  const account = useMemo(() => getAccount(ACCOUNT_ID), [ACCOUNT_ID]);

  let appBarMsg = "";
  let content: JSX.Element | null = null;
  switch (tab) {
    case "home":
      appBarMsg = `${account.name}'s Home`;
      content = <SampleHome />;
      break;
    case "profile":
      appBarMsg = `${account.name}'s Profile`;
      content = <SampleProfile accountId={ACCOUNT_ID} />;
      break;
    case "posts":
      appBarMsg = `${account.name}'s Posts`;
      content = <SamplePosts accountId={ACCOUNT_ID} />;
      break;
    case "saved":
      appBarMsg = `${account.name}'s Saved Posts`;
      content = <SampleSaved accountId={ACCOUNT_ID} />;
      break;
  }

  return (
    <>
      <AppBar position="absolute">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <Menu />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            {appBarMsg}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box component="div" width="100%" height="100%" py={8} overflow="auto">
        {content}
      </Box>
      <Paper
        elevation={6}
        sx={{ position: "absolute", bottom: 0, left: 0, right: 0 }}
      >
        <BottomNavigation
          value={tab}
          onChange={(event, value) => {
            setTab(value);
          }}
        >
          <BottomNavigationAction label="Home" value="home" icon={<Home />} />
          <BottomNavigationAction
            label="Profile"
            value="profile"
            icon={<Person />}
          />
          <BottomNavigationAction
            label="Posts"
            value="posts"
            icon={<Forum />}
          />
          <BottomNavigationAction
            label="Saved"
            value="saved"
            icon={<Bookmark />}
          />
        </BottomNavigation>
      </Paper>
    </>
  );
};

export default SampleContent;
