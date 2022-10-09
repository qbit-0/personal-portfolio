import { Box, Container, Link, Typography } from "@mui/material";
import React, { useContext } from "react";
import { NavContext } from "../utility/context/NavProvider";
import { fadeInProps } from "../utility/other/fadeInProps";

type Props = {};

const Footer = (props: Props) => {
  const { navCallbacks } = useContext(NavContext);

  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
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
          . For the curious, here's the{" "}
          <Link
            onClick={() => {
              window.open(
                "https://github.com/qbit-0/personal-portfolio",
                "_blank"
              );
            }}
          >
            Source code
          </Link>
          .
        </Typography>
      </Box>
    </Container>
  );
};

export default Footer;
