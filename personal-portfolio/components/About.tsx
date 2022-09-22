import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { FC, useContext, useEffect, useRef } from "react";
import { NavContext } from "../utility/context/NavProvider";

type Props = {};

const About: FC<Props> = (props) => {
  const { setNavValue, navCallbacks } = useContext(NavContext);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    navCallbacks.about.setNavCallback(() => () => {
      navRef.current?.scrollIntoView({ block: "center" });
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
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={8}
      >
        <Typography variant="h2" fontSize={96} fontWeight="bold">
          ABOUT
        </Typography>
        <Paper
          component={motion.div}
          elevation={6}
          sx={{
            p: 8,
            borderRadius: 8,
          }}
          onViewportEnter={() => {
            setNavValue("about");
          }}
          viewport={{ amount: "all" }}
        >
          <Typography maxWidth={1000} mx="auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
            quam sit nobis consequatur eveniet perspiciatis fugit vitae ex minus
            maiores dicta illo, aspernatur culpa sed libero delectus harum, ea
            alias. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Rerum libero eveniet inventore quia dolor quod laborum molestiae,
            nisi adipisci a dicta ex iusto eius sint numquam aliquam? Minima,
            iste aut. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Earum inventore eius, quas minima iste modi soluta rerum voluptates
            totam exercitationem dolore dolorum sapiente voluptas molestiae
            incidunt quos, voluptatem necessitatibus at.
          </Typography>
        </Paper>
      </Stack>
    </Container>
  );
};

export default About;
