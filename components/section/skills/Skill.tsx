import { Box, Typography } from "@mui/material";
import React, { FC, useState } from "react";

const LOGO_STYLES = { width: "100%", backgroundColor: "red" };

type Props = { name: string; image: string };

const Skill: FC<Props> = ({ name, image }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Box
      component="div"
      position="relative"
      display="flex"
      flexGrow={1}
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
    >
      <Box
        component="img"
        src={image}
        alt={name}
        sx={{
          ...LOGO_STYLES,
          filter: hovered ? "brightness(25%)" : "",
        }}
      />
      {hovered && (
        <Box
          component="div"
          position="absolute"
          top={0}
          right={0}
          bottom={0}
          left={0}
          zIndex={1}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h4" color="white" fontWeight="bold">
            {name}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Skill;
