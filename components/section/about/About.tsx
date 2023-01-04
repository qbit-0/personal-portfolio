import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import BuildComponents from "./BuildComponents";

type Props = {};

const About = (props: Props) => {
  return (
    <Box component="section">
      <Container>
        <Typography variant="h3">
          I'm a developer based in Orange County, California. I'm always willing
          to learn new tricks.
        </Typography>

        <Stack spacing={8} mt={16}>
          <BuildComponents />

          <Card>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                I design intutive APIs.
              </Typography>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                I bring data to life.
              </Typography>
            </CardContent>
          </Card>
        </Stack>
      </Container>
    </Box>
  );
};

export default About;
