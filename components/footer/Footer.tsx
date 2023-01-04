import { Email, GitHub, Phone } from "@mui/icons-material";
import { Box, Container, Typography, useTheme } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  const theme = useTheme();

  return (
    <Box component="footer" bgcolor={theme.palette.primary.dark} p={4} mt={32}>
      <Container>
        <Grid2 container color="white">
          <Grid2 xs={6}>
            <Typography>Made by me, Duy</Typography>
            <Typography>With React, Next.js, Material UI</Typography>
            <Typography>Feel free to contact me anytime</Typography>
          </Grid2>
          <Grid2 xs={6} container>
            <Grid2 xs={1}>
              <Email />
            </Grid2>
            <Grid2 xs={11}>
              <Typography variant="body1">duypham12241999@gmail.com</Typography>
            </Grid2>
            <Grid2 xs={1}>
              <Phone />
            </Grid2>
            <Grid2 xs={11}>
              <Typography variant="body1">(714) 332-7916</Typography>
            </Grid2>
            <Grid2 xs={1}>
              <GitHub />
            </Grid2>
            <Grid2 xs={11}>
              <Box
                component="a"
                color="inherit"
                href="https://github.com/qbit-0"
              >
                <Typography variant="body2">
                  https://github.com/qbit-0
                </Typography>
              </Box>
            </Grid2>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};

export default Footer;
