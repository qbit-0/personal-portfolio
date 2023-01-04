import { Box, Container, Typography, useTheme } from "@mui/material";
import Image from "next/image";

type Props = {};

const Hero = (props: Props) => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      minHeight="100vh"
      display="flex"
      position="relative"
    >
      <Box
        position="absolute"
        component="div"
        zIndex={-1}
        width="100%"
        height="100%"
        sx={{
          backgroundImage: 'url("https://picsum.photos/1000/1000")',
          filter: "brightness(500%) blur(10px)",
        }}
      />
      <Box
        flex="1 0 auto"
        component="div"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Container maxWidth="lg">
          <Typography variant="h1">
            <Box component="span">Hi, I'm</Box>{" "}
            <Box
              component="span"
              fontWeight="bold"
              color={theme.palette.primary.main}
            >
              Duy Pham
            </Box>
          </Typography>
          <Typography variant="h2">
            Your future fullstack web developer
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Hero;
