import { Box, Container, Typography } from "@mui/material";
import React from "react";

type Props = {};

const Fun = (props: Props) => {
  return (
    <Box component="section">
      <Container>
        <Typography variant="h3">What I do for fun.</Typography>
      </Container>
    </Box>
  );
};

export default Fun;
