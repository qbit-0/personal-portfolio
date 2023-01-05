import { Description, Email, GitHub, Phone } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      id="contact"
      bgcolor={theme.palette.primary.main}
      p={16}
      mt={32}
    >
      <Container maxWidth="lg">
        <Grid2 container spacing={8} color="white">
          <Grid2 xs={12} md={6}>
            <Stack alignItems="start" spacing={1}>
              <Typography variant="h3">Contact</Typography>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Email />
                <Typography variant="body2">
                  duypham12241999@gmail.com
                </Typography>
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
              <Link
                href="pdf/Resume-Duy-Pham.pdf"
                target="_blank"
                download
                color="inherit"
              >
                <Button
                  variant="outlined"
                  fullWidth
                  startIcon={<Description />}
                  color="inherit"
                >
                  resume
                </Button>
              </Link>
            </Stack>
          </Grid2>
          <Grid2 xs={12} md={6}>
            <Typography>Made by me, Duy</Typography>
            <Typography>With React, Next.js, Material UI</Typography>
            <Typography>Feel free to contact me anytime</Typography>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};

export default Footer;
