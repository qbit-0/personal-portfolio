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
        <Button>View Project</Button>
        <Button>View Github</Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
