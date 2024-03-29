import {
  Description,
  Download,
  Email,
  GitHub,
  Phone,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import Link from "next/link";
import { useRef } from "react";
import useRefDimensions from "../../../utility/hooks/useRefDimensions";

type Props = {};

const SampleProfile = (props: Props) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { width } = useRefDimensions(cardRef);

  const md = width > 400;
  const lg = width > 600;

  return (
    <Box ref={cardRef} component={Card} flex="1 0 0" variant="outlined">
      <CardContent>
        <Grid2 container spacing={2}>
          {lg && (
            <Grid2 xs={6} display="flex" flexDirection="column">
              <Box
                component={Avatar}
                src="images/me/profile.jpg"
                variant="rounded"
                flex="1 0 auto"
                width="100%"
                minHeight={300}
                alt="Duy Pham"
              />
            </Grid2>
          )}
          <Grid2 xs={lg ? 6 : 12}>
            <Box component="div">
              {!lg && (
                <Box
                  component={Avatar}
                  src="images/me/profile.jpg"
                  variant="rounded"
                  flex="1 0 auto"
                  width="100%"
                  minHeight={md ? 300 : 200}
                  alt="Duy Pham"
                />
              )}
              <Box component="div">
                <Typography variant="h2">Duy Pham</Typography>
                <Typography variant="h4" gutterBottom>
                  Web Developer
                </Typography>
              </Box>
            </Box>
            <Stack alignItems="start" spacing={1}>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Email />
                <Typography variant="body2">
                  duypham12241999@gmail.com
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Phone />
                <Typography variant="body2">(714) 332-7916</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={2}>
                <GitHub />
                <Box
                  component="a"
                  color="inherit"
                  href="https://github.com/qbit-0"
                >
                  <Typography variant="body2">
                    https://github.com/qbit-0
                  </Typography>
                </Box>
              </Stack>
              <Link href="pdf/Resume-Duy-Pham.pdf" target="_blank" download>
                <Button
                  variant="outlined"
                  fullWidth
                  startIcon={<Description />}
                >
                  resume
                </Button>
              </Link>
            </Stack>
            <Card variant="outlined" sx={{ mt: 2 }}>
              <CardContent>
                <Typography variant="h6">
                  Recent college grad always eager to learn. Likes building
                  stuff.
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
