import { GitHub } from "@mui/icons-material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Link,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { FC, useContext, useEffect, useRef } from "react";
import { NavContext } from "../utility/context/NavProvider";
import { fadeInProps } from "../utility/other/fadeInProps";

type Props = {};

const Contact: FC<Props> = (props) => {
  const theme = useTheme();
  const showPhoto = useMediaQuery(theme.breakpoints.up("md"));
  const { setNavValue, navCallbacks } = useContext(NavContext);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    navCallbacks.contact.setNavCallback(() => () => {
      navRef.current?.scrollIntoView();
    });
  }, [navRef]);

  const photo = (
    <img
      title="photo of Duy"
      src="/images/me/Stand.jpg"
      className="fill block"
    />
  );

  return (
    <Container
      component={motion.div}
      ref={navRef}
      sx={{
        position: "relative",
        py: 16,
      }}
      maxWidth="md"
      onViewportEnter={() => {
        setNavValue("contact");
      }}
      viewport={{ amount: 0.5 }}
    >
      <Paper elevation={1} sx={{ p: 4 }} {...fadeInProps}>
        <Stack direction="row" spacing={2}>
          {showPhoto && (
            <Paper
              elevation={1}
              sx={{
                position: "relative",
                overflow: "clip",
                flex: 1,
              }}
              {...fadeInProps}
            >
              {photo}
            </Paper>
          )}
          <Stack position="relative" component="div" flex={2}>
            <Typography variant="h2" {...fadeInProps}>
              CONTACT
            </Typography>
            <Box component="div">
              <Typography variant="h3" {...fadeInProps}>
                I'm looking for work. Let's get in touch.
              </Typography>
              <Box
                width="100%"
                display="flex"
                justifyContent="center"
                mt={4}
                {...fadeInProps}
              >
                <Link underline="none" href="/pdf/Resume-Duy-Pham.pdf" download>
                  <Button variant="contained">Check Out My Resume</Button>
                </Link>
              </Box>
            </Box>
          </Stack>
          <Stack
            spacing={2}
            direction="column"
            justifyContent="center"
            alignItems="end"
          >
            <IconButton
              color="primary"
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/duy-pham-a15160140",
                  "_blank"
                );
              }}
              {...fadeInProps}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              color="primary"
              onClick={() => {
                window.open("https://github.com/qbit-0/", "_blank");
              }}
              {...fadeInProps}
            >
              <GitHub />
            </IconButton>
          </Stack>
        </Stack>
      </Paper>
    </Container>
  );
};

export default Contact;
