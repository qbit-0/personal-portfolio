import { Box, Paper } from "@mui/material";
import { FC } from "react";
import NavBar from "./NavBar";

type Props = {};

const FixedNavBar: FC<Props> = ({}) => {
  return (
    <Box component="div" position="fixed" zIndex={50} top={0} width="100%">
      <Box component="div" width="100%" bgcolor="white">
        <NavBar />
      </Box>
    </Box>
  );
};

export default FixedNavBar;
