import { Button, Paper, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { FC, useState } from "react";
import SplitablePaper from "./SplitablePaper";

type Props = {
  name: string;
  url: string;
  flipped?: boolean;
};

const ProjectCard: FC<Props> = ({ name, url, flipped = false }) => {
  const [isSplit, setIsSplit] = useState(false);

  const info = (
    <Paper key={0} sx={{ flex: 1 }}>
      <Stack height="100%" justifyContent="center" alignItems="center">
        <Typography variant="h4" display="block">
          {name}
        </Typography>
        <Button
          variant="contained"
          onClick={() => {
            window.open(url, "_blank");
          }}
        >
          View Project
        </Button>
      </Stack>
    </Paper>
  );

  const preview = (
    <Paper
      key={1}
      component={motion.div}
      sx={{
        flex: 2,
        overflow: "clip",
      }}
      onHoverStart={() => {
        setIsSplit(true);
      }}
      onHoverEnd={() => {
        setIsSplit(false);
      }}
    >
      <iframe src={url} width="100%" height="100%" style={{ border: "none" }} />
    </Paper>
  );

  return (
    <SplitablePaper
      width="1000px"
      height="600px"
      elevation={6}
      splitDirection="vertical"
      animate={isSplit ? "split" : "joined"}
      whileInView={{ scale: 1.025 }}
      viewport={{ amount: "all" }}
    >
      {flipped ? [preview, info] : [info, preview]}
    </SplitablePaper>
  );
};

export default ProjectCard;
