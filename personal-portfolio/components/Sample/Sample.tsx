import { Box, Paper, Stack } from "@mui/material";
import { FC, useState } from "react";
import PostsProvider from "../../utility/context/SampleProvider";
import { fadeInProps } from "../../utility/other/fadeInProps";
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

const Sample: FC<Props> = () => {
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
