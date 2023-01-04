import {
  Card,
  CardContent,
  Typography,
  Stack,
  CardActions,
  Slider,
  Box,
} from "@mui/material";
import React, { useState } from "react";
import SampleProfile from "./SampleProfile";

type Props = {};

const SampleComponents = (props: Props) => {
  const [numComponents, setNumComponents] = useState(1);

  const handleSliderChange = (_: Event, value: number | number[]) => {
    if (!Array.isArray(value)) setNumComponents(value);
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h4" gutterBottom>
          I build responsive components.
        </Typography>
        <Stack direction="row" mt={8} spacing={2}>
          <SampleProfile />
          {numComponents > 1 && <SampleProfile />}
          {numComponents > 2 && <SampleProfile />}
        </Stack>
      </CardContent>
      <Box component={CardActions} px={8} py={4}>
        <Slider
          value={numComponents}
          onChange={handleSliderChange}
          min={1}
          max={3}
          valueLabelDisplay="on"
          marks={[
            { value: 1, label: "1 component" },
            { value: 2, label: "2 components" },
            { value: 3, label: "3 components" },
          ]}
        />
      </Box>
    </Card>
  );
};

export default SampleComponents;
