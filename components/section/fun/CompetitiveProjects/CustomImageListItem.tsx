import {
  Box,
  ClickAwayListener,
  IconButton,
  ImageListItem,
  ImageListItemBar,
  Modal,
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
    <video src={src} controls style={{ width: "100%" }} />
  ) : (
    <img src={src} title={title} />
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
      <Modal open={open}>
        <Box
          component="div"
          position="absolute"
          width="100%"
          height="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <ClickAwayListener
            onClickAway={() => {
              setOpen(false);
            }}
          >
            <Box component="div" maxWidth="80vw" height="80vh" bgcolor="white">
              {media}
              {description && (
                <ImageListItemBar position="top" title={description} />
              )}
            </Box>
          </ClickAwayListener>
        </Box>
      </Modal>
    </>
  );
};

export default CompetitionImage;
