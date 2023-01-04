import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { FC } from "react";

type Props = {
  name: string;
  desc: string;
  image: string;
  url: string;
  github: string;
};

const ProjectCard: FC<Props> = ({ name, desc, image, url, github }) => {
  return (
    <Card>
      <Box
        component={CardMedia}
        image={image}
        title={`${name} preview`}
        height={300}
      />
      <CardContent>
        <Typography variant="h4">{name}</Typography>
        <Typography variant="h5">{desc}</Typography>
      </CardContent>
      <CardActions>
        <a href={url}>
          <Button>View Project</Button>
        </a>
        <a href={github}>
          <Button>View Github</Button>
        </a>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
