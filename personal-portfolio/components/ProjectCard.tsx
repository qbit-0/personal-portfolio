import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { FC } from "react";
import { fadeInProps } from "../utility/other/fadeInProps";

type Props = {
  name: string;
  url: string;
  flipped?: boolean;
};

const ProjectCard: FC<Props> = ({ name, url, flipped = false }) => {
  return (
    <Paper sx={{ width: "100%", overflow: "clip" }} {...fadeInProps}>
      <Stack width="100%" height="600px">
        <Box
          component="div"
          sx={{
            flex: 2,
          }}
        >
          <iframe
            src={url}
            width="100%"
            height="100%"
            style={{ border: "none" }}
          />
        </Box>
        <Stack
          flex={1}
          height="100%"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          {...fadeInProps}
        >
          <Typography variant="h3" fontWeight="bold">
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
      </Stack>
    </Paper>
  );
};

export default ProjectCard;
