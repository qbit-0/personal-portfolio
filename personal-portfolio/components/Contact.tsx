import { Email, GitHub } from "@mui/icons-material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box, Container, Link, Paper, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { FC, useContext, useEffect, useRef } from "react";
import { NavContext } from "../utility/context/NavProvider";

type Props = {};

const Contact: FC<Props> = (props) => {
  const { setNavValue, navCallbacks } = useContext(NavContext);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    navCallbacks.contact.setNavCallback(() => () => {
      navRef.current?.scrollIntoView();
    });
  }, [navRef]);

  return (
    <Container
      component={motion.div}
      ref={navRef}
      sx={{
        position: "relative",
        minHeight: "100vh",
        mt: 16,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onViewportEnter={() => {
        setNavValue("contact");
      }}
    >
      <Box component="div">
        <Typography variant="h2" fontSize={96} fontWeight="bold">
          CONTACT
        </Typography>
        <Paper elevation={6} sx={{ p: 4 }}>
          <Stack spacing={2}>
            <Stack direction="row" spacing={2}>
              <Email />
              <Link>
                <Typography>duypham12241999@gmail.com</Typography>
              </Link>
            </Stack>

            <Stack direction="row" spacing={2}>
              <LinkedInIcon />
              <Link>
                <Typography>
                  https://www.linkedin.com/in/duy-pham-a15160140
                </Typography>
              </Link>
            </Stack>

            <Stack direction="row" spacing={2}>
              <GitHub />
              <Link>
                <Typography>https://github.com/qbit-0/</Typography>
              </Link>
            </Stack>
          </Stack>
        </Paper>
      </Box>
      <Box component="div" position="absolute" left={0} bottom={0}>
        <Box component="div" p={2}>
          <Typography>
            Designed and built by{" "}
            <Link
              onClick={() => {
                if (navCallbacks.home.navCallback)
                  navCallbacks.home.navCallback();
              }}
            >
              me
            </Link>
            .{" "}
            <Link
              onClick={() => {
                window.open(
                  "https://github.com/qbit-0/personal-portfolio",
                  "_blank"
                );
              }}
            >
              Source code
            </Link>{" "}
            for the curious.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;
