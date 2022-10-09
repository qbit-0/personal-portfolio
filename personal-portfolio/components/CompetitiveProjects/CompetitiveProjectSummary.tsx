import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AccordionSummary, Box, Stack, Typography } from "@mui/material";
import { FC } from "react";

type Props = { competition: string; submission: string; type: string };

const CompetitiveProjectSummary: FC<Props> = ({
  competition,
  submission,
  type,
}) => {
  return (
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <Stack direction="row" spacing={2} alignItems="center">
        <Box component="div">
          <Typography variant="h4">{competition}</Typography>
          <Typography variant="h5">{submission}</Typography>
          <Typography variant="h6">{type}</Typography>
        </Box>
      </Stack>
    </AccordionSummary>
  );
};

export default CompetitiveProjectSummary;
