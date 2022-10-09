import {
  Box,
  createTheme,
  Modal,
  Paper,
  Portal,
  Stack,
  ThemeProvider,
} from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import darkThemeOptions from "../../styles/theme/darkThemeOptions";
import PostsProvider from "../../utility/context/SampleProvider";
import {
  INITIAL_ACCOUNTS,
  INITIAL_ACCOUNT_ID,
  INITIAL_POSTS,
  INITIAL_POST_ID,
} from "../../utility/other/sampleInitialValues";
import FadeInWrapper, { fadeInProps } from "../../utility/other/fadeInProps";

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
          elevation={1}
          sx={{
            maxWidth: "70vw",
            width: targetWidth,
            height: "70vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "clip",
          }}
          {...fadeInProps}
        >
          <ScalingContainer targetWidth={targetWidth}>
            <SampleContent />
          </ScalingContainer>
        </Paper>
        <Box {...fadeInProps}>
          <SampleControls
            targetWidth={targetWidth}
            setTargetWidth={setTargetWidth}
          />
        </Box>
      </Stack>
    </PostsProvider>
  );
};

export default Sample;
