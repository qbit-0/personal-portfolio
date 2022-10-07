import { Chip, Divider, Stack, Tab, Tabs } from "@mui/material";
import React, { SyntheticEvent, useState } from "react";
import SamplePosts from "./SamplePosts";
import SampleSaved from "./SampleSaved";

type Props = {};

const SamplePostsAndSaved = (props: Props) => {
  const [tab, setTab] = useState("posts");

  const content = tab === "posts" ? <SamplePosts /> : <SampleSaved />;

  const handleTabChange = (event: SyntheticEvent, value: any) => {
    setTab(value);
  };

  return (
    <>
      <Divider orientation="vertical">
        <Stack spacing={4}>
          <Chip
            label="Posts"
            color={tab === "posts" ? "success" : "default"}
            onClick={() => setTab("posts")}
          />
          <Chip
            label="Saved"
            color={tab === "saved" ? "success" : "default"}
            onClick={() => setTab("saved")}
          />
        </Stack>
      </Divider>
      <Stack flex={1}>{content}</Stack>
    </>
  );
};

export default SamplePostsAndSaved;
