import { Box } from "@mui/material";
import React, { FC } from "react";

const LOGO_STYLES = { width: "100%", backgroundColor: "red" };

type Props = { name: string; image: string };

const Skill: FC<Props> = ({ name, image }) => {
  return <Box component="img" src={image} alt={name} sx={LOGO_STYLES} />;
};

export default Skill;
