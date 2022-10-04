import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { FC, useContext, useEffect, useRef } from "react";
import { NavContext } from "../utility/context/NavProvider";

type Props = {};

const Competition: FC<Props> = (props) => {
  const { setNavValue, navCallbacks } = useContext(NavContext);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    navCallbacks.competition.setNavCallback(() => () => {
      navRef.current?.scrollIntoView();
    });
  }, [navRef]);

  return (
    <Container
      ref={navRef}
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        my: 16,
      }}
    >
      <Box
        component={motion.div}
        zIndex={2000}
        onViewportEnter={() => {
          setNavValue("competition");
        }}
      >
        <Typography variant="h2" fontSize={96} fontWeight="bold">
          COMPETITION
        </Typography>
        <Typography variant="h5" fontWeight="bold">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi eum
          tempore ea obcaecati quo eius officia laboriosam molestiae placeat
          suscipit repudiandae nulla consectetur reprehenderit, aliquid
          eligendi, neque consequuntur porro incidunt.
        </Typography>
      </Box>
    </Container>
  );
};

export default Competition;
