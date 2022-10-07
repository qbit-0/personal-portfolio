import { Bookmark, Forum, Home, Menu, Person } from "@mui/icons-material";
import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Button,
  Chip,
  Divider,
  IconButton,
  Paper,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { FC, useContext, useMemo, useState } from "react";
import { SampleContext } from "../../utility/context/SampleProvider";
import SampleHome from "./SampleHome";
import SamplePosts from "./SamplePosts";
import SampleProfile from "./SampleProfile";
import SampleSaved from "./SampleSaved";

const TabValues = ["home", "profile", "posts", "saved"] as const;
type TabType = typeof TabValues[number];

type Props = {};

const SampleContent: FC<Props> = ({}) => {
  const { userAccountId, getAccount, targetWidth } = useContext(SampleContext);
  const [tab, setTab] = useState<TabType>("profile");

  const account = useMemo(() => getAccount(userAccountId), [userAccountId]);

  let content: React.ReactNode = null;
  if (targetWidth >= 1440) {
    switch (tab) {
      case "home":
        content = <SampleHome />;
        break;
      case "profile":
      case "posts":
      case "saved":
        content = (
          <Stack direction="row">
            <SampleProfile />
            <Divider orientation="vertical">
              <Stack spacing={4}>
                <Chip
                  label="Posts"
                  icon={<Forum />}
                  size="small"
                  onClick={() => setTab("posts")}
                />
              </Stack>
            </Divider>
            <SamplePosts />
            <Divider orientation="vertical">
              <Stack spacing={4}>
                <Chip
                  label="Saved"
                  icon={<Bookmark />}
                  size="small"
                  onClick={() => setTab("saved")}
                />
              </Stack>
            </Divider>
            <SampleSaved />
          </Stack>
        );
        break;
    }
  } else if (targetWidth >= 1024) {
    switch (tab) {
      case "home":
        content = <SampleHome />;
        break;
      case "profile":
      case "posts":
      case "saved":
        content = content = (
          <Stack direction="row">
            <SampleProfile />
            <Divider orientation="vertical">
              <Stack spacing={4}>
                <Chip
                  label="Posts"
                  icon={<Forum />}
                  color={
                    tab === "profile" || tab === "posts" ? "primary" : "default"
                  }
                  onClick={() => setTab("posts")}
                />
                <Chip
                  label="Saved"
                  icon={<Bookmark />}
                  color={tab === "saved" ? "primary" : "default"}
                  onClick={() => setTab("saved")}
                />
              </Stack>
            </Divider>
            {tab === "profile" || tab === "posts" ? (
              <SamplePosts />
            ) : (
              <SampleSaved />
            )}
          </Stack>
        );
        break;
    }
  } else {
    switch (tab) {
      case "home":
        content = <SampleHome />;
        break;
      case "profile":
        content = <SampleProfile />;
        break;
      case "posts":
        content = <SamplePosts />;
        break;
      case "saved":
        content = <SampleSaved />;
        break;
    }
  }

  return (
    <>
      {targetWidth < 1024 && (
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
              {
                {
                  home: `${account.name}'s Home`,
                  profile: `${account.name}'s Profile`,
                  posts: `${account.name}'s Posts`,
                  saved: `${account.name}'s Saved Posts`,
                }[tab]
              }
            </Typography>
          </Toolbar>
        </AppBar>
      )}
      <Stack direction="row" spacing={1} width="100%" height="100%">
        {targetWidth >= 1024 && (
          <Stack pl={1} py={1} spacing={1} flex={0}>
            <Chip
              label="Home"
              icon={<Home />}
              color={tab === "home" ? "primary" : "default"}
              onClick={() => {
                setTab("home");
              }}
            />
            <Chip
              label="Profile"
              icon={<Person />}
              color={
                ["profile", "posts", "saved"].includes(tab)
                  ? "primary"
                  : "default"
              }
              onClick={() => {
                setTab("profile");
              }}
            />
          </Stack>
        )}
        {content}
      </Stack>
      {targetWidth < 1024 && (
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
      )}
    </>
  );
};

export default SampleContent;
