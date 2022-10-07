import { Box, Modal, Paper, Portal, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import PostsProvider from "../../utility/context/SampleProvider";
import {
  INITIAL_ACCOUNTS,
  INITIAL_ACCOUNT_ID,
  INITIAL_POSTS,
  INITIAL_POST_ID,
} from "../../utility/other/sampleInitialValues";

import ScalingContainer from "../ScalingContainer";
import SampleContent from "./SampleContent";
import SampleControls, {
  DEFAULT_PRESET,
  PRESET_WIDTHS,
} from "./SampleControls";

type Props = {};

const Sample = (props: Props) => {
  const [targetWidth, setTargetWidth] = useState<number>(
    PRESET_WIDTHS[DEFAULT_PRESET]
  );

  return (
    <PostsProvider
      initialAccounts={INITIAL_ACCOUNTS}
      initialAccountId={INITIAL_ACCOUNT_ID}
      initialPosts={INITIAL_POSTS}
      initialPostId={INITIAL_POST_ID}
      targetWidth={targetWidth}
    >
      <Stack
        maxWidth="100%"
        spacing={2}
        alignItems="center"
        position="relative"
      >
        <Paper
          component="div"
          elevation={6}
          sx={{
            maxWidth: "70vw",
            width: targetWidth,
            height: "80vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "clip",
          }}
        >
          <ScalingContainer targetWidth={targetWidth}>
            <SampleContent />
          </ScalingContainer>
        </Paper>
        <SampleControls
          targetWidth={targetWidth}
          setTargetWidth={setTargetWidth}
        />
      </Stack>
    </PostsProvider>
  );
};

export default Sample;
