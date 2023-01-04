import { Email, GitHub, Phone } from "@mui/icons-material";
import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { useRef } from "react";
import useRefDimensions from "../../../utility/hooks/useRefDimensions";

type Props = {};

const SampleProfile = (props: Props) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { width } = useRefDimensions(cardRef);

  const md = width > 400;
  const lg = width > 600;

  return (
    <Box ref={cardRef} component={Card} flex="1 0 0">
      <CardContent>
        <Grid2 container spacing={2}>
          {lg && (
            <Grid2 xs={6} display="flex" flexDirection="column">
              <Box
                component={Avatar}
                src="images/me/stand.jpg"
                variant="rounded"
                flex="1 0 auto"
                width="100%"
                minHeight={300}
              />
            </Grid2>
          )}
          <Grid2 xs={lg ? 6 : 12}>
            <Box component="div">
              {!lg && (
                <Box
                  component={Avatar}
                  src="images/me/stand.jpg"
                  variant="rounded"
                  flex="1 0 auto"
                  width="100%"
                  minHeight={md ? 300 : 200}
                />
              )}
              <Box component="div">
                <Typography variant="h2">Duy Pham</Typography>
                <Typography variant="h4" gutterBottom>
                  Web Developer
                </Typography>
              </Box>
            </Box>
            <Grid2 container spacing={1}>
              <Grid2 xs={1}>
                <Email />
              </Grid2>
              <Grid2 xs={11}>
                <Typography variant="body1">
                  duypham12241999@gmail.com
                </Typography>
              </Grid2>
              <Grid2 xs={1}>
                <Phone />
              </Grid2>
              <Grid2 xs={11}>
                <Typography variant="body1">(714) 332-7916</Typography>
              </Grid2>
              <Grid2 xs={1}>
                <GitHub />
              </Grid2>
              <Grid2 xs={11}>
                <a href="https://github.com/qbit-0">
                  <Typography variant="body2">
                    https://github.com/qbit-0
                  </Typography>
                </a>
              </Grid2>
            </Grid2>
            <Card variant="outlined" sx={{ mt: 2 }}>
              <CardContent>
                <Typography variant="h6">
                  Recent college grad looking to learn. Likes building stuff.
                  Pretty much anything.
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        </Grid2>
      </CardContent>
    </Box>
  );
};

export default SampleProfile;
