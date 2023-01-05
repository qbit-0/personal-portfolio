import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { DataGrid } from "@mui/x-data-grid";
import { ResponsivePie } from "@nivo/pie";
import React from "react";

type Props = {};

const SampleData = (props: Props) => {
  const data = [
    { id: 0, label: "Luck", value: 10 },
    { id: 1, label: "Skill", value: 20 },
    {
      id: 2,
      label: "Will",
      value: 15,
    },
    { id: 3, label: "Pleasure", value: 5 },
    { id: 4, label: "Pain", value: 50 },
  ];

  const defs = [
    {
      id: "dots",
      type: "patternDots",
      background: "inherit",
      color: "rgba(255, 255, 255, 0.3)",
      size: 4,
      padding: 1,
      stagger: true,
    },
    {
      id: "lines",
      type: "patternLines",
      background: "inherit",
      color: "rgba(255, 255, 255, 0.3)",
      rotation: -45,
      lineWidth: 6,
      spacing: 10,
    },
    {
      id: "squares",
      type: "patternSquares",
      background: "inherit",
      color: "rgba(255, 255, 255, 0.3)",
      size: 4,
      padding: 4,
    },
  ];

  const fill = [
    { match: (d: any) => d.id % 6 === 0, id: "dots" },
    { match: (d: any) => d.id % 6 === 2, id: "lines" },
    { match: (d: any) => d.id % 6 === 4, id: "squares" },
  ];

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h4" gutterBottom>
          I bring data to life.
        </Typography>
        <Grid2 container mt={8}>
          <Grid2 xs={12} md={6} minHeight={400}>
            <DataGrid
              columns={[
                { field: "id", headerName: "Id" },
                { field: "label", headerName: "Label" },
                { field: "value", headerName: "Value" },
              ]}
              rows={data.map((item) => ({
                id: item.id,
                label: item.label,
                value: item.value,
              }))}
            />
          </Grid2>
          <Grid2 xs={12} md={6} display="flex">
            <Box component="div" flexGrow={1} height={500}>
              <ResponsivePie
                data={data}
                margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                innerRadius={0.25}
                padAngle={2}
                cornerRadius={5}
                borderWidth={1}
                colors={{ scheme: "pastel1" }}
                defs={defs}
                fill={fill}
                arcLinkLabel="label"
                activeInnerRadiusOffset={10}
                activeOuterRadiusOffset={10}
              />
            </Box>
          </Grid2>
        </Grid2>
      </CardContent>
    </Card>
  );
};

export default SampleData;
