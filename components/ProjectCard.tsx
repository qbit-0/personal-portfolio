import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { fadeInProps } from "../utility/other/fadeInProps";

type Props = {
  name: string;
  image: string;
  url: string;
  github_url: string;
  description: string;
};

const ProjectCard: FC<Props> = ({
  name,
  image,
  url,
  github_url,
  description,
}) => {
  return (
    <Paper sx={{ width: "100%", overflow: "clip" }} {...fadeInProps}>
      <Stack width="100%">
        <Box component="div" p={2}>
          <img title="website preview" src={image} className="fill" />
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
          <Typography variant="h5" fontWeight="thin">
            {description}
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              onClick={() => {
                window.open(url, "_blank");
              }}
            >
              View Project
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                window.open(github_url, "_blank");
              }}
            >
              View Github
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default ProjectCard;
