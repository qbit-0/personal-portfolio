import {
  Box,
  IconButton,
  ImageListItem,
  ImageListItemBar,
  Modal,
  Portal,
} from "@mui/material";
import { FC, useState } from "react";

import InfoIcon from "@mui/icons-material/Info";

type Props = {
  src: string;
  title: string;
  description?: string;
  isVideo?: boolean;
};

const CompetitionImage: FC<Props> = ({
  src,
  title,
  description,
  isVideo = false,
}) => {
  const [open, setOpen] = useState(false);

  const handleInfoClick = () => {
    setOpen(!open);
  };

  const media = isVideo ? (
    <video src={src} controls />
  ) : (
    <img
      src={src}
      title={title}
      width="100%"
      height="100%"
      style={{ objectFit: "contain" }}
    />
  );

  return (
    <>
      <ImageListItem>
        {media}
        <ImageListItemBar
          position="top"
          title={title}
          subtitle={description}
          actionIcon={
            <IconButton onClick={handleInfoClick}>
              <InfoIcon />
            </IconButton>
          }
        />
      </ImageListItem>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <Box
          component="div"
          position="absolute"
          width="full"
          height="full"
          top="50%"
          left="50%"
          bgcolor="white"
          sx={{ transform: "translate(-50%, -50%)" }}
        >
          <ImageListItem>
            {media}
            {description && (
              <ImageListItemBar position="top" title={description} />
            )}
          </ImageListItem>
        </Box>
      </Modal>
    </>
  );
};

export default CompetitionImage;
