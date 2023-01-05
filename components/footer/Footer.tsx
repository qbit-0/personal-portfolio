import { Email, GitHub, Phone } from "@mui/icons-material";
import { Box, Container, Stack, Typography, useTheme } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      id="contact"
      bgcolor={theme.palette.primary.main}
      p={4}
      mt={32}
    >
      <Container maxWidth="lg">
        <Grid2 container spacing={2} color="white">
          <Grid2 xs={12} sm={6}>
            <Typography>Made by me, Duy</Typography>
            <Typography>With React, Next.js, Material UI</Typography>
            <Typography>Feel free to contact me anytime</Typography>
          </Grid2>
          <Grid2 xs={12} sm={6}>
            <Stack direction="row" alignItems="center" spacing={2}>
              <Email />
              <Typography variant="body2">duypham12241999@gmail.com</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={2}>
              <Phone />
              <Typography variant="body2">(714) 332-7916</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={2}>
              <GitHub />
              <Box
                component="a"
                color="inherit"
                href="https://github.com/qbit-0"
              >
                <Typography variant="body2">
                  https://github.com/qbit-0
                </Typography>
              </Box>
            </Stack>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};

export default Footer;
