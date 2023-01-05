import { Box, Container, Typography, useTheme } from "@mui/material";
import WelcomeCanvas from "./welcome_background/WelcomeCanvas";

type Props = {};

const Welcome = (props: Props) => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      id="welcome"
      minHeight="100vh"
      display="flex"
      position="relative"
    >
      <Box position="absolute" component="div" width="100%" height="100%">
        <WelcomeCanvas />
      </Box>
      <Box
        flex="1 0 0"
        component="div"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        zIndex={1}
      >
        <Container maxWidth="lg">
          <Typography variant="h1">
            <Box component="span">Hi, I'm</Box>
            <br />
            <Box
              component="span"
              fontWeight="bold"
              color={theme.palette.primary.main}
            >
              Duy Pham
            </Box>
          </Typography>
          <Typography variant="h2">Fullstack developer</Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Welcome;
