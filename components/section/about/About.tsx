import { Box, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import SampleComponents from "./SampleComponents";
import SampleData from "./SampleData";

type Props = {};

const About = (props: Props) => {
  return (
    <Box component="section">
      <Container>
        <Typography variant="h3">
          I'm a developer based in Orange County, California. I'm always willing
          to learn new tricks.
        </Typography>
      </Container>
      <Container>
        <Stack spacing={8} mt={8}>
          <SampleComponents />

          {/* <Card>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                I design intutive APIs.
              </Typography>
            </CardContent>
          </Card> */}

          <SampleData />
        </Stack>
      </Container>
    </Box>
  );
};

export default About;
