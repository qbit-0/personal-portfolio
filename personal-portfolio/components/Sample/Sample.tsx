import { Paper, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import PostsProvider from "../../utility/context/SampleProvider";
import {
  initialAccounts,
  initialAccountId,
  initialPosts,
  initialPostId,
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
    <Stack maxWidth="100%" spacing={2} alignItems="center">
      <Paper
        component={motion.div}
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
          <PostsProvider
            initialAccounts={initialAccounts}
            initialAccountId={initialAccountId}
            initialPosts={initialPosts}
            initialPostId={initialPostId}
          >
            <SampleContent />
          </PostsProvider>
        </ScalingContainer>
      </Paper>
      <SampleControls
        targetWidth={targetWidth}
        setTargetWidth={setTargetWidth}
      />
    </Stack>
  );
};

export default Sample;
