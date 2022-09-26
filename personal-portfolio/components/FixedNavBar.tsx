import { Box, Paper } from "@mui/material";
import { FC } from "react";
import NavBar from "./NavBar";

type Props = {};

const FixedNavBar: FC<Props> = ({}) => {
  return (
    <Box display="flex" position="fixed" zIndex={50} width="100%" top={0} p={4}>
      <NavBar orientation="vertical" />
    </Box>
  );
};

export default FixedNavBar;
